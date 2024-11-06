use hdi::prelude::*;
use linked_devices_types::validate_agents_have_linked_devices;

use crate::linked_devices::linked_devices_integrity_zome_name;

pub fn validate_create_link_profile_to_agent(
    action_hash: ActionHash,
    action: CreateLink,
    base_address: AnyLinkableHash,
    target_address: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    let _agent = target_address
        .into_agent_pub_key()
        .ok_or(wasm_error!(WasmErrorInner::Guest(
            "No AgentPubKey associated with the base of an AgentToProfile link".to_string()
        )))?;
    // Check the entry type for the given action hash
    let profile_hash =
        base_address
            .into_action_hash()
            .ok_or(wasm_error!(WasmErrorInner::Guest(
                "No action hash associated with link".to_string()
            )))?;
    let record = must_get_valid_record(profile_hash.clone())?;
    let _profile: crate::Profile = record
        .entry()
        .to_app_option()
        .map_err(|e| wasm_error!(e))?
        .ok_or(wasm_error!(WasmErrorInner::Guest(
            "Linked action must reference an entry".to_string()
        )))?;

    if action.author.eq(record.action().author()) {
        return Ok(ValidateCallbackResult::Valid);
    }

    if let Some(linked_devices_integrity_zome_name) = linked_devices_integrity_zome_name() {
        validate_agents_have_linked_devices(
            &vec![
                (action.author, action_hash),
                (
                    record.action().author().clone(),
                    record.action_address().clone(),
                ),
            ],
            linked_devices_integrity_zome_name,
        )
    } else {
        Ok(ValidateCallbackResult::Invalid(String::from(
            "ProfileToAgent links can only be created by the agent that created the profile",
        )))
    }
}
pub fn validate_delete_link_profile_to_agent(
    _action: DeleteLink,
    _original_action: CreateLink,
    _base: AnyLinkableHash,
    _target: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    Ok(ValidateCallbackResult::Invalid(String::from(
        "AgentToProfile links cannot be deleted",
    )))
}

use hdi::prelude::*;
use linked_devices_types::validate_agents_have_linked_devices;

use crate::{linked_devices::linked_devices_integrity_zome_name, Profile};

pub fn validate_create_link_agent_to_profile(
    action_hash: ActionHash,
    action: CreateLink,
    base_address: AnyLinkableHash,
    target_address: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    let Some(_agent) = base_address.into_agent_pub_key() else {
        return Ok(ValidateCallbackResult::Invalid(
            "No AgentPubKey associated with the base of an AgentToProfile link".to_string(),
        ));
    };
    // Check the entry type for the given action hash
    let Some(profile_hash) = target_address.into_action_hash() else {
        return Ok(ValidateCallbackResult::Invalid(
            "No action hash associated with link".to_string(),
        ));
    };
    let record = must_get_valid_record(profile_hash.clone())?;
    let Ok(Some(_profile)) = record.entry().to_app_option::<Profile>() else {
        return Ok(ValidateCallbackResult::Invalid(
            "Linked action must reference an entry".to_string(),
        ));
    };

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
            "AgentToProfile links can only be created by the agent that created the profile",
        )))
    }
}

pub fn validate_delete_link_agent_to_profile(
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

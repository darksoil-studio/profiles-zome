use hdi::prelude::*;

use crate::Profile;

pub fn validate_create_link_path_to_profile(
    _action: CreateLink,
    _base_address: AnyLinkableHash,
    target_address: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    // TODO: validate path base address?

    let Some(profile_hash) = target_address.into_action_hash() else {
        return Ok(ValidateCallbackResult::Invalid(
            "No action hash associated with link".to_string(),
        ));
    };
    let record = must_get_valid_record(profile_hash)?;
    let Ok(Some(_profile)) = record.entry().to_app_option::<Profile>() else {
        return Ok(ValidateCallbackResult::Invalid(
            "Linked action must reference an entry".to_string(),
        ));
    };
    Ok(ValidateCallbackResult::Valid)
}
pub fn validate_delete_link_path_to_profile(
    _action: DeleteLink,
    _original_action: CreateLink,
    _base: AnyLinkableHash,
    _target: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    // TODO: add the appropriate validation rules
    Ok(ValidateCallbackResult::Valid)
}

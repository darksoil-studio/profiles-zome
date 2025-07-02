use hc_zome_traits::implement_zome_trait_as_externs;
use hdk::prelude::*;
use profiles_provider_zome_trait::{Profile, ProfilesProviderZomeTrait};

use crate::{profiles::get_latest_profile, search::get_profile_for_agent};

pub struct ProfilesProvider;

#[implement_zome_trait_as_externs]
impl ProfilesProviderZomeTrait for ProfilesProvider {
    fn get_profile(agent: AgentPubKey) -> ExternResult<Option<Profile>> {
        let links = get_profile_for_agent(agent)?;

        let Some(link) = links.first() else {
            return Ok(None);
        };

        let Some(profile_hash) = link.target.clone().into_action_hash() else {
            return Err(wasm_error!("Profile link is not for an ActionHash."));
        };

        let Some(latest_profile) = get_latest_profile(profile_hash)? else {
            return Ok(None);
        };

        let Some(entry) = latest_profile.entry.into_option() else {
            return Err(wasm_error!("Profile record does not contain an entry."));
        };

        let profile = Profile::try_from(entry)?;
        Ok(Some(profile))
    }
}

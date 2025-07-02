use std::collections::BTreeMap;

use hc_zome_traits::*;
use hdk::prelude::*;

/// Profile entry definition.
///
/// The profile must include at a minimum the nickname of the agent
/// in order to be able to search for agents by nickname.
#[hdk_entry_helper]
#[derive(Clone, PartialEq, Eq)]
pub struct Profile {
    pub name: String,
    pub avatar: Option<String>,
    pub fields: BTreeMap<String, String>,
}

#[zome_trait]
pub trait ProfilesProviderZomeTrait {
    fn get_profile(agent: AgentPubKey) -> ExternResult<Option<Profile>>;
}

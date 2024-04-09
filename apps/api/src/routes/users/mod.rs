use crate::Ctx;
use rspc::{Router, RouterBuilder};
pub mod get;

pub fn mount() -> RouterBuilder<Ctx> {
    Router::<Ctx>::new().query("get", |t| t(get::get))
}

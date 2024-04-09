use std::{path::PathBuf, sync::Arc};

use rspc::{Config, Router};

use crate::Ctx;
pub mod users;

pub fn init_router() -> Arc<Router<Ctx>> {
    let router = Router::<Ctx>::new()
        .config(
            Config::new()
                .set_ts_bindings_header("/* eslint-disable */")
                .export_ts_bindings(
                    PathBuf::from(env!("CARGO_MANIFEST_DIR"))
                        .join("../../libs/@rspc-client/src/bindings.ts"),
                ),
        )
        .query("version", |t| t(|_ctx, _input: ()| "1.0.0 "))
        .merge("users.", users::mount())
        .build()
        .arced();
    router
}

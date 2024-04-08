use rspc::{Config, Router};
use std::{path::PathBuf, sync::Arc};

pub mod users;

pub fn init_router() -> Arc<Router> {
    let router = rspc::Router::<()>::new()
        .config(
            Config::new()
                .set_ts_bindings_header("/* eslint-disable */")
                .export_ts_bindings(
                    PathBuf::from(env!("CARGO_MANIFEST_DIR"))
                        .join("../../libs/@rspc-client/src/bindings.ts"),
                ),
        )
        .query("version", |t| t(|_ctx, _input: ()| "1.0.0"))
        .merge("users.", users::users::mount())
        .build()
        .arced();
    router
}

use rspc::{Router, RouterBuilder};

pub fn mount() -> RouterBuilder {
    let users_router = <Router>::new().query("list", |t| t(|ctx, input: ()| vec![] as Vec<()>));

    users_router
}

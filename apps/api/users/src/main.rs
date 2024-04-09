use std::sync::Arc;

use axum::{http::HeaderValue, http::Request, http::Response, routing::get};

use tower_http::cors::CorsLayer;
// Stops the client from outputting a huge number of warnings during compilation.
#[allow(warnings, unused)]
mod prisma;

use prisma::PrismaClient;

#[tokio::main]
async fn main() {
    let client = Arc::new(PrismaClient::_builder().build().await.unwrap());

    let app = axum::Router::new()
        .route("/", get(|| async { "Hello 'rspc'!" }))
        .nest(
            "/rspc",
            rspc_axum::endpoint(routes::init_router(), move || Ctx {
                prisma: client.clone(),
            }),
        )
        .layer(
            CorsLayer::new().allow_origin("http://localhost:5173".parse::<HeaderValue>().unwrap()),
        );

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

pub struct Ctx {
    pub prisma: Arc<PrismaClient>,
}

use axum::{http::HeaderValue, routing::get};

use tower_http::cors::CorsLayer;
pub mod routes;
// Stops the client from outputting a huge number of warnings during compilation.
#[allow(warnings, unused)]
mod prisma;

use prisma::PrismaClient;
use prisma_client_rust::NewClientError;

#[tokio::main]
async fn main() {
    let client: Result<PrismaClient, NewClientError> = PrismaClient::_builder().build().await;
    let app = axum::Router::new()
        .route("/", get(|| async { "Hello 'rspc'!" }))
        .nest("/rspc", rspc_axum::endpoint(routes::init_router(), || ()))
        .layer(
            CorsLayer::new().allow_origin("http://localhost:5173".parse::<HeaderValue>().unwrap()),
        );

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

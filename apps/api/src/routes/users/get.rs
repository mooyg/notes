use crate::Ctx;

pub async fn get(ctx: Ctx, _input: ()) -> String {
    let _ = ctx
        .prisma
        .user()
        .create(1.to_string(), "mooy".to_string(), vec![])
        .exec()
        .await;
    "mooy".to_string()
}

# Notes
Gonna be slow progress to creating everything from scratch.

# Getting started

## Install deps using `pnpm`
`pnpm i`

## Generate prisma client (Do not check this into the source control)
`nx run api:prisma generate`

## Running the app in watch 
`nx watch --all --verbose  -- nx run-many -t dev`
(Might need to save a random file to make this work tho)

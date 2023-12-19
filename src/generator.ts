import { pipeline } from "@xenova/transformers";

export async function generate(
    input: string,
    task = "feature-extraction",
    model = "Supabase/gte-small"
) {
    const pipe = await pipeline(task, model);
    // Generate the embedding from the user input
    const output = await pipe(input, {
        pooling: "mean",
        normalize: true
    });

    return Array.from(output.data);
}

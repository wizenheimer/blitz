import { generate } from "./src/generator";

// Extract the embedding output
const text = "lorem ipsum dolor sit amet, consectetur adipiscing";
const embedding = generate(text);
console.log(embedding);

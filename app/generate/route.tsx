import { Prompt } from "next/font/google";
import Replicate from "replicate";
const replicate = new Replicate({
  auth: process.env.REPLICATE_AUTH,
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const prompt = searchParams.get("prompt") as string;

  if (!prompt) {
    Response.json({
      error: "Missing prompt",
    });
  }
  const image = await replicate.run(
    "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
    {
      input: {
        width: 512,
        height: 512,
        prompt: prompt,
        refine: "expert_ensemble_refiner",
        lora_scale: 0.6,
        num_outputs: 1,
        guidance_scale: 7.5,
        apply_watermark: false,
        high_noise_frac: 0.8,
        negative_prompt: "",
        prompt_strength: 0.8,
        num_inference_steps: 25,
      },
    }
  );

  console.log(image);

  return Response.json({
    prompt: prompt,
    images: image,
  });
}

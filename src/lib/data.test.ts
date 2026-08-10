import {
  getArticleBySlug,
  getImageById,
  getImages,
  getLatestSatelliteImage,
  getTimelapses,
} from "@/lib/data";

describe("data access abstraction", () => {
  it("returns gallery images", () => {
    const images = getImages();
    expect(images.length).toBeGreaterThan(0);
    expect(images[0]).toHaveProperty("id");
  });

  it("returns an image by id", () => {
    const image = getImageById("1");
    expect(image?.title).toMatch(/Wolken/i);
  });

  it("returns the latest satellite image", () => {
    const latest = getLatestSatelliteImage();
    expect(latest).toBeDefined();
    expect(latest?.date).toBe("2026-08-06");
  });

  it("returns timelapse entries", () => {
    expect(getTimelapses().some((entry) => entry.src.endsWith(".mp4"))).toBe(true);
  });

  it("resolves knowledge articles", () => {
    const article = getArticleBySlug("software-pipeline");
    expect(article?.topic).toBe("Software");
  });
});

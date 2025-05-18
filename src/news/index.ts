interface News {
  en: { title: string; description: string }[];
  ch: { title: string; description: string }[];
}

export default {
  en: [
    {
      title: "Start of Registration",
      description: "May 10th, 2025 17:00",
    },
  ],
  ch: [
    {
      title: "報名開始",
      description: "即日起至 5/10（六）17:00 止",
    },
  ],
} satisfies News;

type Duration = "years" | "months" | "days" | "hours" | "minutes" | "seconds";

type ElapsedDuration = `${number} ${Duration} ago`;

type TimeAgo = ElapsedDuration | "just now";

export function timeAgo(date: Date): TimeAgo;

export default timeAgo;

type Duration = "years" | "months" | "days" | "hours" | "minutes" | "seconds";

type ElapsedDuration = `${number} ${Duration} ago`;

type TimeAgo = ElapsedDuration | "just now";

function timeAgo(date: Date): TimeAgo;

export = timeAgo;

export type Section = {
    children: React.ReactNode;
    title: string;
}

export type FeedbackOptions = {
    options: string[];
    handleClick: void;
}
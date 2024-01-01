export function formatDateDifference(dateString: string): string {
    const now = new Date(); // Get current date and time
    const pastDate = new Date(dateString); // Create a Date object from the given string

    const differenceInMilliseconds = now.getTime() - pastDate.getTime();

    const daysDifference = Math.floor(
        differenceInMilliseconds / (1000 * 60 * 60 * 24)
    );

    if (daysDifference === 0) {
        return "Today";
    } else if (daysDifference === 1) {
        return "1 day ago";
    } else {
        return `${daysDifference} days ago`;
    }
}

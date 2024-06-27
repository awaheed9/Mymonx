export const capitalizeWords = (input: string): string => {
    if(input !== undefined && input !== '') {
        return input.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    return input;
}

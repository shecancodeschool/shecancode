export function textLimiter(text, length) {
    if (text?.length > length) {
        return text.substring(0, length);
    }
    return text;
}
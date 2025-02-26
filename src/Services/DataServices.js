export const Advice = async () => {
    const promise = await fetch("https://api.adviceslip.com/advice")
    const data = await promise.json;
    return data;
}
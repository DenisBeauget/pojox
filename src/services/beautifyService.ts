export async function beautifyJSON(entry: string) {
    console.log(entry)
    return JSON.stringify(JSON.parse(entry), null, 4);
}
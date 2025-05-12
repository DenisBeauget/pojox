export async function beautifyJSON(entry: string, tab: number) {
    return JSON.stringify(JSON.parse(entry), null, tab);
}
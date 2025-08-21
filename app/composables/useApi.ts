export default function useApi(symbol: string) {
    return useFetch(`/api/price?symbol=${symbol}`)
}
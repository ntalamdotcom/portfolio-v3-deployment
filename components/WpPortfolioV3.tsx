import PortfolioItem from "./PortfolioItem";

interface PortfolioItem {
    id: number;
    title: string;
    content: string;
}
export default async function WpPortfolioV3() {

    try {
        const response = await fetch(process.env.NEXT_PUBLIC_PAGE_BY_TAGS_ENDPOINT);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        const portfolio_item: PortfolioItem[] = data
        // console.log("portfolio_item: ", portfolio_item)
        return portfolio_item
    } catch (error) {
        console.error('Fetching error:', error);
    }
    return
}
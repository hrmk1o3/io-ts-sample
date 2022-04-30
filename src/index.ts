import { fetchTitle } from "./request";

const main = async () => {
  let title = await fetchTitle(1);

  console.log("title:", title);
}

main();

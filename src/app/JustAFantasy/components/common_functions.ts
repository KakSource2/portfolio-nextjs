import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

pb.autoCancellation(false);

const check_token = async () => {
  if (pb.authStore.isValid) return true;
  pb.authStore.clear();
  return false;
};

const check_user_details = async () => {
  if (pb.authStore.model === null) return;
  const record = await pb.collection("users").getOne(pb.authStore.model.id);
  if (record) return record;
};

const search_for_monsters = async () => {
  const records = await pb
    .collection("monsters")
    .getFullList(200 /* batch size */, {
      sort: "-created",
    });
  return records;
};

export { check_token, check_user_details, search_for_monsters };

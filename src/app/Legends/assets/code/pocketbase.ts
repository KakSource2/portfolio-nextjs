import PocketBase from "pocketbase";

const PbLegends = new PocketBase("http://127.0.0.1:8090");

const auth_as_admin = async (password: string) => {
  const authData = await PbLegends.admins.authWithPassword(
    "kaksource@gmail.com",
    password
  );
  console.log(authData);
};

export { PbLegends, auth_as_admin };

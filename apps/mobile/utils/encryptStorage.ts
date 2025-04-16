// utils/encryptStorage.ts
import { EncryptStorage } from "encrypt-storage";

export const encryptStorage = new EncryptStorage(
  process.env.ENCRYPT_SECRET_KEY!,
  {
    storageType: "localStorage",
  }
);

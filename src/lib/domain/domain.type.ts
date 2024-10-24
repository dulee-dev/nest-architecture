export interface BaseEntity {
  id: string;
  createdAt: Date;
  deletedAt: Date | null;
  updatedAt: Date | null;
}

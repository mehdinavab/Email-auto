export interface IPostMailInfoRequestDto {
  server_name: string;
  password: string;
  tenant_id: string;
  client_id: string;
  secret: string;
  authority: string;
  scope: string;
}
export interface IPostMailInfoResponseDto {
  id: number;
  server_name: string;
  password: string;
  tenant_id: string;
  client_id: string;
  secret: string;
  authority: string;
  scope: string;
}

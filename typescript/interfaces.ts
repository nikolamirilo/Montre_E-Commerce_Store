export interface User {
    _id?: string;
    full_name: string;
    image: string;
}

export interface Product {
    _id: string;
    author: User;
    location: string;
    title: string;
    description: string;
    images: string[];
    price: number;
}

export interface CloudinaryResponse {
    asset_id: string,
    public_id: string,
    version: number,
    version_id: string,
    signature: string,
    width: number,
    height: number,
    format: string,
    resource_type: string,
    created_at:string,
    tags: [],
    bytes: number,
    type: string,
    etag: string,
    placeholder: boolean,
    url: string,
    secure_url: string,
    folder: string,
    access_mode: string,
    existing: boolean,
    original_filename:string
}
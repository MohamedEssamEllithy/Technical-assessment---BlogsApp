 export default interface Post {
  category: string;
  content_html: string;
  content_text:string
  created_at: string;
  description: string;
  id: number;
  photo_url: string;
  title: string;
  updated_at: string;
  user_id: number;
};

export interface author {
  id: number;
  gender: string;
  date_of_birth: string;
  job: string;
  city: string;
  zipcode: string;
  latitude: number;
  profile_picture: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  street: string;
  state: string;
  country: string;
  longitude: number;
};
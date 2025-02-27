
export interface NavItem {
    text: string;
    href: string;
    active?: boolean;
  }
  
  export interface Sponsor {
    id: number;
    name: string;
    logo: string;
    url: string;
  }
  
  export interface HackathonStats {
    prizePool: string;
    universities: number;
    students: number;
  }
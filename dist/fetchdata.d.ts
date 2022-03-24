export interface ObjInterface {
    data: {
        metadata: {
            title: string;
            description: string;
        };
    };
}
export default function fetchData(): Promise<ObjInterface["data"] | void>;

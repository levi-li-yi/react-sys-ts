export interface Tree {
    name: string,
    href: string,
    exact: boolean,
    children: Tree[]
}

export interface Routes {
    name: string,
    path: string,
    exact: boolean,
    components: any
}
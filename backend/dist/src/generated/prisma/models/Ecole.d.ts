import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EcoleModel = runtime.Types.Result.DefaultSelection<Prisma.$EcolePayload>;
export type AggregateEcole = {
    _count: EcoleCountAggregateOutputType | null;
    _min: EcoleMinAggregateOutputType | null;
    _max: EcoleMaxAggregateOutputType | null;
};
export type EcoleMinAggregateOutputType = {
    id: string | null;
    nom: string | null;
    adresse: string | null;
    telephone: string | null;
    email: string | null;
    siteWeb: string | null;
    logo: string | null;
    directeur: string | null;
    ville: string | null;
    pays: string | null;
    codePostal: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EcoleMaxAggregateOutputType = {
    id: string | null;
    nom: string | null;
    adresse: string | null;
    telephone: string | null;
    email: string | null;
    siteWeb: string | null;
    logo: string | null;
    directeur: string | null;
    ville: string | null;
    pays: string | null;
    codePostal: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EcoleCountAggregateOutputType = {
    id: number;
    nom: number;
    adresse: number;
    telephone: number;
    email: number;
    siteWeb: number;
    logo: number;
    directeur: number;
    ville: number;
    pays: number;
    codePostal: number;
    description: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type EcoleMinAggregateInputType = {
    id?: true;
    nom?: true;
    adresse?: true;
    telephone?: true;
    email?: true;
    siteWeb?: true;
    logo?: true;
    directeur?: true;
    ville?: true;
    pays?: true;
    codePostal?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EcoleMaxAggregateInputType = {
    id?: true;
    nom?: true;
    adresse?: true;
    telephone?: true;
    email?: true;
    siteWeb?: true;
    logo?: true;
    directeur?: true;
    ville?: true;
    pays?: true;
    codePostal?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EcoleCountAggregateInputType = {
    id?: true;
    nom?: true;
    adresse?: true;
    telephone?: true;
    email?: true;
    siteWeb?: true;
    logo?: true;
    directeur?: true;
    ville?: true;
    pays?: true;
    codePostal?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type EcoleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EcoleWhereInput;
    orderBy?: Prisma.EcoleOrderByWithRelationInput | Prisma.EcoleOrderByWithRelationInput[];
    cursor?: Prisma.EcoleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EcoleCountAggregateInputType;
    _min?: EcoleMinAggregateInputType;
    _max?: EcoleMaxAggregateInputType;
};
export type GetEcoleAggregateType<T extends EcoleAggregateArgs> = {
    [P in keyof T & keyof AggregateEcole]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEcole[P]> : Prisma.GetScalarType<T[P], AggregateEcole[P]>;
};
export type EcoleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EcoleWhereInput;
    orderBy?: Prisma.EcoleOrderByWithAggregationInput | Prisma.EcoleOrderByWithAggregationInput[];
    by: Prisma.EcoleScalarFieldEnum[] | Prisma.EcoleScalarFieldEnum;
    having?: Prisma.EcoleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EcoleCountAggregateInputType | true;
    _min?: EcoleMinAggregateInputType;
    _max?: EcoleMaxAggregateInputType;
};
export type EcoleGroupByOutputType = {
    id: string;
    nom: string;
    adresse: string | null;
    telephone: string | null;
    email: string | null;
    siteWeb: string | null;
    logo: string | null;
    directeur: string | null;
    ville: string | null;
    pays: string;
    codePostal: string | null;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: EcoleCountAggregateOutputType | null;
    _min: EcoleMinAggregateOutputType | null;
    _max: EcoleMaxAggregateOutputType | null;
};
export type GetEcoleGroupByPayload<T extends EcoleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EcoleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EcoleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EcoleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EcoleGroupByOutputType[P]>;
}>>;
export type EcoleWhereInput = {
    AND?: Prisma.EcoleWhereInput | Prisma.EcoleWhereInput[];
    OR?: Prisma.EcoleWhereInput[];
    NOT?: Prisma.EcoleWhereInput | Prisma.EcoleWhereInput[];
    id?: Prisma.StringFilter<"Ecole"> | string;
    nom?: Prisma.StringFilter<"Ecole"> | string;
    adresse?: Prisma.StringNullableFilter<"Ecole"> | string | null;
    telephone?: Prisma.StringNullableFilter<"Ecole"> | string | null;
    email?: Prisma.StringNullableFilter<"Ecole"> | string | null;
    siteWeb?: Prisma.StringNullableFilter<"Ecole"> | string | null;
    logo?: Prisma.StringNullableFilter<"Ecole"> | string | null;
    directeur?: Prisma.StringNullableFilter<"Ecole"> | string | null;
    ville?: Prisma.StringNullableFilter<"Ecole"> | string | null;
    pays?: Prisma.StringFilter<"Ecole"> | string;
    codePostal?: Prisma.StringNullableFilter<"Ecole"> | string | null;
    description?: Prisma.StringNullableFilter<"Ecole"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Ecole"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Ecole"> | Date | string;
};
export type EcoleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    adresse?: Prisma.SortOrderInput | Prisma.SortOrder;
    telephone?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    siteWeb?: Prisma.SortOrderInput | Prisma.SortOrder;
    logo?: Prisma.SortOrderInput | Prisma.SortOrder;
    directeur?: Prisma.SortOrderInput | Prisma.SortOrder;
    ville?: Prisma.SortOrderInput | Prisma.SortOrder;
    pays?: Prisma.SortOrder;
    codePostal?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EcoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    nom?: string;
    email?: string;
    AND?: Prisma.EcoleWhereInput | Prisma.EcoleWhereInput[];
    OR?: Prisma.EcoleWhereInput[];
    NOT?: Prisma.EcoleWhereInput | Prisma.EcoleWhereInput[];
    adresse?: Prisma.StringNullableFilter<"Ecole"> | string | null;
    telephone?: Prisma.StringNullableFilter<"Ecole"> | string | null;
    siteWeb?: Prisma.StringNullableFilter<"Ecole"> | string | null;
    logo?: Prisma.StringNullableFilter<"Ecole"> | string | null;
    directeur?: Prisma.StringNullableFilter<"Ecole"> | string | null;
    ville?: Prisma.StringNullableFilter<"Ecole"> | string | null;
    pays?: Prisma.StringFilter<"Ecole"> | string;
    codePostal?: Prisma.StringNullableFilter<"Ecole"> | string | null;
    description?: Prisma.StringNullableFilter<"Ecole"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Ecole"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Ecole"> | Date | string;
}, "id" | "nom" | "email">;
export type EcoleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    adresse?: Prisma.SortOrderInput | Prisma.SortOrder;
    telephone?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    siteWeb?: Prisma.SortOrderInput | Prisma.SortOrder;
    logo?: Prisma.SortOrderInput | Prisma.SortOrder;
    directeur?: Prisma.SortOrderInput | Prisma.SortOrder;
    ville?: Prisma.SortOrderInput | Prisma.SortOrder;
    pays?: Prisma.SortOrder;
    codePostal?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EcoleCountOrderByAggregateInput;
    _max?: Prisma.EcoleMaxOrderByAggregateInput;
    _min?: Prisma.EcoleMinOrderByAggregateInput;
};
export type EcoleScalarWhereWithAggregatesInput = {
    AND?: Prisma.EcoleScalarWhereWithAggregatesInput | Prisma.EcoleScalarWhereWithAggregatesInput[];
    OR?: Prisma.EcoleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EcoleScalarWhereWithAggregatesInput | Prisma.EcoleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Ecole"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"Ecole"> | string;
    adresse?: Prisma.StringNullableWithAggregatesFilter<"Ecole"> | string | null;
    telephone?: Prisma.StringNullableWithAggregatesFilter<"Ecole"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"Ecole"> | string | null;
    siteWeb?: Prisma.StringNullableWithAggregatesFilter<"Ecole"> | string | null;
    logo?: Prisma.StringNullableWithAggregatesFilter<"Ecole"> | string | null;
    directeur?: Prisma.StringNullableWithAggregatesFilter<"Ecole"> | string | null;
    ville?: Prisma.StringNullableWithAggregatesFilter<"Ecole"> | string | null;
    pays?: Prisma.StringWithAggregatesFilter<"Ecole"> | string;
    codePostal?: Prisma.StringNullableWithAggregatesFilter<"Ecole"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"Ecole"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Ecole"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Ecole"> | Date | string;
};
export type EcoleCreateInput = {
    id?: string;
    nom: string;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    siteWeb?: string | null;
    logo?: string | null;
    directeur?: string | null;
    ville?: string | null;
    pays?: string;
    codePostal?: string | null;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EcoleUncheckedCreateInput = {
    id?: string;
    nom: string;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    siteWeb?: string | null;
    logo?: string | null;
    directeur?: string | null;
    ville?: string | null;
    pays?: string;
    codePostal?: string | null;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EcoleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    siteWeb?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    directeur?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.StringFieldUpdateOperationsInput | string;
    codePostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EcoleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    siteWeb?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    directeur?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.StringFieldUpdateOperationsInput | string;
    codePostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EcoleCreateManyInput = {
    id?: string;
    nom: string;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    siteWeb?: string | null;
    logo?: string | null;
    directeur?: string | null;
    ville?: string | null;
    pays?: string;
    codePostal?: string | null;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EcoleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    siteWeb?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    directeur?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.StringFieldUpdateOperationsInput | string;
    codePostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EcoleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    siteWeb?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    directeur?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.StringFieldUpdateOperationsInput | string;
    codePostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EcoleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    siteWeb?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    directeur?: Prisma.SortOrder;
    ville?: Prisma.SortOrder;
    pays?: Prisma.SortOrder;
    codePostal?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EcoleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    siteWeb?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    directeur?: Prisma.SortOrder;
    ville?: Prisma.SortOrder;
    pays?: Prisma.SortOrder;
    codePostal?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EcoleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    siteWeb?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    directeur?: Prisma.SortOrder;
    ville?: Prisma.SortOrder;
    pays?: Prisma.SortOrder;
    codePostal?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EcoleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    adresse?: boolean;
    telephone?: boolean;
    email?: boolean;
    siteWeb?: boolean;
    logo?: boolean;
    directeur?: boolean;
    ville?: boolean;
    pays?: boolean;
    codePostal?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["ecole"]>;
export type EcoleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    adresse?: boolean;
    telephone?: boolean;
    email?: boolean;
    siteWeb?: boolean;
    logo?: boolean;
    directeur?: boolean;
    ville?: boolean;
    pays?: boolean;
    codePostal?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["ecole"]>;
export type EcoleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    adresse?: boolean;
    telephone?: boolean;
    email?: boolean;
    siteWeb?: boolean;
    logo?: boolean;
    directeur?: boolean;
    ville?: boolean;
    pays?: boolean;
    codePostal?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["ecole"]>;
export type EcoleSelectScalar = {
    id?: boolean;
    nom?: boolean;
    adresse?: boolean;
    telephone?: boolean;
    email?: boolean;
    siteWeb?: boolean;
    logo?: boolean;
    directeur?: boolean;
    ville?: boolean;
    pays?: boolean;
    codePostal?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type EcoleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "adresse" | "telephone" | "email" | "siteWeb" | "logo" | "directeur" | "ville" | "pays" | "codePostal" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["ecole"]>;
export type $EcolePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Ecole";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nom: string;
        adresse: string | null;
        telephone: string | null;
        email: string | null;
        siteWeb: string | null;
        logo: string | null;
        directeur: string | null;
        ville: string | null;
        pays: string;
        codePostal: string | null;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["ecole"]>;
    composites: {};
};
export type EcoleGetPayload<S extends boolean | null | undefined | EcoleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EcolePayload, S>;
export type EcoleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EcoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EcoleCountAggregateInputType | true;
};
export interface EcoleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Ecole'];
        meta: {
            name: 'Ecole';
        };
    };
    findUnique<T extends EcoleFindUniqueArgs>(args: Prisma.SelectSubset<T, EcoleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EcoleClient<runtime.Types.Result.GetResult<Prisma.$EcolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EcoleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EcoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EcoleClient<runtime.Types.Result.GetResult<Prisma.$EcolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EcoleFindFirstArgs>(args?: Prisma.SelectSubset<T, EcoleFindFirstArgs<ExtArgs>>): Prisma.Prisma__EcoleClient<runtime.Types.Result.GetResult<Prisma.$EcolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EcoleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EcoleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EcoleClient<runtime.Types.Result.GetResult<Prisma.$EcolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EcoleFindManyArgs>(args?: Prisma.SelectSubset<T, EcoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EcolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EcoleCreateArgs>(args: Prisma.SelectSubset<T, EcoleCreateArgs<ExtArgs>>): Prisma.Prisma__EcoleClient<runtime.Types.Result.GetResult<Prisma.$EcolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EcoleCreateManyArgs>(args?: Prisma.SelectSubset<T, EcoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EcoleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EcoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EcolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EcoleDeleteArgs>(args: Prisma.SelectSubset<T, EcoleDeleteArgs<ExtArgs>>): Prisma.Prisma__EcoleClient<runtime.Types.Result.GetResult<Prisma.$EcolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EcoleUpdateArgs>(args: Prisma.SelectSubset<T, EcoleUpdateArgs<ExtArgs>>): Prisma.Prisma__EcoleClient<runtime.Types.Result.GetResult<Prisma.$EcolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EcoleDeleteManyArgs>(args?: Prisma.SelectSubset<T, EcoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EcoleUpdateManyArgs>(args: Prisma.SelectSubset<T, EcoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EcoleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EcoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EcolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EcoleUpsertArgs>(args: Prisma.SelectSubset<T, EcoleUpsertArgs<ExtArgs>>): Prisma.Prisma__EcoleClient<runtime.Types.Result.GetResult<Prisma.$EcolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EcoleCountArgs>(args?: Prisma.Subset<T, EcoleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EcoleCountAggregateOutputType> : number>;
    aggregate<T extends EcoleAggregateArgs>(args: Prisma.Subset<T, EcoleAggregateArgs>): Prisma.PrismaPromise<GetEcoleAggregateType<T>>;
    groupBy<T extends EcoleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EcoleGroupByArgs['orderBy'];
    } : {
        orderBy?: EcoleGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EcoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEcoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EcoleFieldRefs;
}
export interface Prisma__EcoleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EcoleFieldRefs {
    readonly id: Prisma.FieldRef<"Ecole", 'String'>;
    readonly nom: Prisma.FieldRef<"Ecole", 'String'>;
    readonly adresse: Prisma.FieldRef<"Ecole", 'String'>;
    readonly telephone: Prisma.FieldRef<"Ecole", 'String'>;
    readonly email: Prisma.FieldRef<"Ecole", 'String'>;
    readonly siteWeb: Prisma.FieldRef<"Ecole", 'String'>;
    readonly logo: Prisma.FieldRef<"Ecole", 'String'>;
    readonly directeur: Prisma.FieldRef<"Ecole", 'String'>;
    readonly ville: Prisma.FieldRef<"Ecole", 'String'>;
    readonly pays: Prisma.FieldRef<"Ecole", 'String'>;
    readonly codePostal: Prisma.FieldRef<"Ecole", 'String'>;
    readonly description: Prisma.FieldRef<"Ecole", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Ecole", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Ecole", 'DateTime'>;
}
export type EcoleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EcoleSelect<ExtArgs> | null;
    omit?: Prisma.EcoleOmit<ExtArgs> | null;
    where: Prisma.EcoleWhereUniqueInput;
};
export type EcoleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EcoleSelect<ExtArgs> | null;
    omit?: Prisma.EcoleOmit<ExtArgs> | null;
    where: Prisma.EcoleWhereUniqueInput;
};
export type EcoleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EcoleSelect<ExtArgs> | null;
    omit?: Prisma.EcoleOmit<ExtArgs> | null;
    where?: Prisma.EcoleWhereInput;
    orderBy?: Prisma.EcoleOrderByWithRelationInput | Prisma.EcoleOrderByWithRelationInput[];
    cursor?: Prisma.EcoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EcoleScalarFieldEnum | Prisma.EcoleScalarFieldEnum[];
};
export type EcoleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EcoleSelect<ExtArgs> | null;
    omit?: Prisma.EcoleOmit<ExtArgs> | null;
    where?: Prisma.EcoleWhereInput;
    orderBy?: Prisma.EcoleOrderByWithRelationInput | Prisma.EcoleOrderByWithRelationInput[];
    cursor?: Prisma.EcoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EcoleScalarFieldEnum | Prisma.EcoleScalarFieldEnum[];
};
export type EcoleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EcoleSelect<ExtArgs> | null;
    omit?: Prisma.EcoleOmit<ExtArgs> | null;
    where?: Prisma.EcoleWhereInput;
    orderBy?: Prisma.EcoleOrderByWithRelationInput | Prisma.EcoleOrderByWithRelationInput[];
    cursor?: Prisma.EcoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EcoleScalarFieldEnum | Prisma.EcoleScalarFieldEnum[];
};
export type EcoleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EcoleSelect<ExtArgs> | null;
    omit?: Prisma.EcoleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EcoleCreateInput, Prisma.EcoleUncheckedCreateInput>;
};
export type EcoleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EcoleCreateManyInput | Prisma.EcoleCreateManyInput[];
};
export type EcoleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EcoleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EcoleOmit<ExtArgs> | null;
    data: Prisma.EcoleCreateManyInput | Prisma.EcoleCreateManyInput[];
};
export type EcoleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EcoleSelect<ExtArgs> | null;
    omit?: Prisma.EcoleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EcoleUpdateInput, Prisma.EcoleUncheckedUpdateInput>;
    where: Prisma.EcoleWhereUniqueInput;
};
export type EcoleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EcoleUpdateManyMutationInput, Prisma.EcoleUncheckedUpdateManyInput>;
    where?: Prisma.EcoleWhereInput;
    limit?: number;
};
export type EcoleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EcoleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EcoleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EcoleUpdateManyMutationInput, Prisma.EcoleUncheckedUpdateManyInput>;
    where?: Prisma.EcoleWhereInput;
    limit?: number;
};
export type EcoleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EcoleSelect<ExtArgs> | null;
    omit?: Prisma.EcoleOmit<ExtArgs> | null;
    where: Prisma.EcoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.EcoleCreateInput, Prisma.EcoleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EcoleUpdateInput, Prisma.EcoleUncheckedUpdateInput>;
};
export type EcoleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EcoleSelect<ExtArgs> | null;
    omit?: Prisma.EcoleOmit<ExtArgs> | null;
    where: Prisma.EcoleWhereUniqueInput;
};
export type EcoleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EcoleWhereInput;
    limit?: number;
};
export type EcoleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EcoleSelect<ExtArgs> | null;
    omit?: Prisma.EcoleOmit<ExtArgs> | null;
};

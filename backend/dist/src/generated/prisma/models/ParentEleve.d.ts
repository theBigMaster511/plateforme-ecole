import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ParentEleveModel = runtime.Types.Result.DefaultSelection<Prisma.$ParentElevePayload>;
export type AggregateParentEleve = {
    _count: ParentEleveCountAggregateOutputType | null;
    _min: ParentEleveMinAggregateOutputType | null;
    _max: ParentEleveMaxAggregateOutputType | null;
};
export type ParentEleveMinAggregateOutputType = {
    parentId: string | null;
    eleveId: string | null;
};
export type ParentEleveMaxAggregateOutputType = {
    parentId: string | null;
    eleveId: string | null;
};
export type ParentEleveCountAggregateOutputType = {
    parentId: number;
    eleveId: number;
    _all: number;
};
export type ParentEleveMinAggregateInputType = {
    parentId?: true;
    eleveId?: true;
};
export type ParentEleveMaxAggregateInputType = {
    parentId?: true;
    eleveId?: true;
};
export type ParentEleveCountAggregateInputType = {
    parentId?: true;
    eleveId?: true;
    _all?: true;
};
export type ParentEleveAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParentEleveWhereInput;
    orderBy?: Prisma.ParentEleveOrderByWithRelationInput | Prisma.ParentEleveOrderByWithRelationInput[];
    cursor?: Prisma.ParentEleveWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ParentEleveCountAggregateInputType;
    _min?: ParentEleveMinAggregateInputType;
    _max?: ParentEleveMaxAggregateInputType;
};
export type GetParentEleveAggregateType<T extends ParentEleveAggregateArgs> = {
    [P in keyof T & keyof AggregateParentEleve]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateParentEleve[P]> : Prisma.GetScalarType<T[P], AggregateParentEleve[P]>;
};
export type ParentEleveGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParentEleveWhereInput;
    orderBy?: Prisma.ParentEleveOrderByWithAggregationInput | Prisma.ParentEleveOrderByWithAggregationInput[];
    by: Prisma.ParentEleveScalarFieldEnum[] | Prisma.ParentEleveScalarFieldEnum;
    having?: Prisma.ParentEleveScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ParentEleveCountAggregateInputType | true;
    _min?: ParentEleveMinAggregateInputType;
    _max?: ParentEleveMaxAggregateInputType;
};
export type ParentEleveGroupByOutputType = {
    parentId: string;
    eleveId: string;
    _count: ParentEleveCountAggregateOutputType | null;
    _min: ParentEleveMinAggregateOutputType | null;
    _max: ParentEleveMaxAggregateOutputType | null;
};
export type GetParentEleveGroupByPayload<T extends ParentEleveGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ParentEleveGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ParentEleveGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ParentEleveGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ParentEleveGroupByOutputType[P]>;
}>>;
export type ParentEleveWhereInput = {
    AND?: Prisma.ParentEleveWhereInput | Prisma.ParentEleveWhereInput[];
    OR?: Prisma.ParentEleveWhereInput[];
    NOT?: Prisma.ParentEleveWhereInput | Prisma.ParentEleveWhereInput[];
    parentId?: Prisma.StringFilter<"ParentEleve"> | string;
    eleveId?: Prisma.StringFilter<"ParentEleve"> | string;
    parent?: Prisma.XOR<Prisma.ParentScalarRelationFilter, Prisma.ParentWhereInput>;
    eleve?: Prisma.XOR<Prisma.EleveScalarRelationFilter, Prisma.EleveWhereInput>;
};
export type ParentEleveOrderByWithRelationInput = {
    parentId?: Prisma.SortOrder;
    eleveId?: Prisma.SortOrder;
    parent?: Prisma.ParentOrderByWithRelationInput;
    eleve?: Prisma.EleveOrderByWithRelationInput;
};
export type ParentEleveWhereUniqueInput = Prisma.AtLeast<{
    parentId_eleveId?: Prisma.ParentEleveParentIdEleveIdCompoundUniqueInput;
    AND?: Prisma.ParentEleveWhereInput | Prisma.ParentEleveWhereInput[];
    OR?: Prisma.ParentEleveWhereInput[];
    NOT?: Prisma.ParentEleveWhereInput | Prisma.ParentEleveWhereInput[];
    parentId?: Prisma.StringFilter<"ParentEleve"> | string;
    eleveId?: Prisma.StringFilter<"ParentEleve"> | string;
    parent?: Prisma.XOR<Prisma.ParentScalarRelationFilter, Prisma.ParentWhereInput>;
    eleve?: Prisma.XOR<Prisma.EleveScalarRelationFilter, Prisma.EleveWhereInput>;
}, "parentId_eleveId">;
export type ParentEleveOrderByWithAggregationInput = {
    parentId?: Prisma.SortOrder;
    eleveId?: Prisma.SortOrder;
    _count?: Prisma.ParentEleveCountOrderByAggregateInput;
    _max?: Prisma.ParentEleveMaxOrderByAggregateInput;
    _min?: Prisma.ParentEleveMinOrderByAggregateInput;
};
export type ParentEleveScalarWhereWithAggregatesInput = {
    AND?: Prisma.ParentEleveScalarWhereWithAggregatesInput | Prisma.ParentEleveScalarWhereWithAggregatesInput[];
    OR?: Prisma.ParentEleveScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ParentEleveScalarWhereWithAggregatesInput | Prisma.ParentEleveScalarWhereWithAggregatesInput[];
    parentId?: Prisma.StringWithAggregatesFilter<"ParentEleve"> | string;
    eleveId?: Prisma.StringWithAggregatesFilter<"ParentEleve"> | string;
};
export type ParentEleveCreateInput = {
    parent: Prisma.ParentCreateNestedOneWithoutEnfantsInput;
    eleve: Prisma.EleveCreateNestedOneWithoutParentsInput;
};
export type ParentEleveUncheckedCreateInput = {
    parentId: string;
    eleveId: string;
};
export type ParentEleveUpdateInput = {
    parent?: Prisma.ParentUpdateOneRequiredWithoutEnfantsNestedInput;
    eleve?: Prisma.EleveUpdateOneRequiredWithoutParentsNestedInput;
};
export type ParentEleveUncheckedUpdateInput = {
    parentId?: Prisma.StringFieldUpdateOperationsInput | string;
    eleveId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ParentEleveCreateManyInput = {
    parentId: string;
    eleveId: string;
};
export type ParentEleveUpdateManyMutationInput = {};
export type ParentEleveUncheckedUpdateManyInput = {
    parentId?: Prisma.StringFieldUpdateOperationsInput | string;
    eleveId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ParentEleveListRelationFilter = {
    every?: Prisma.ParentEleveWhereInput;
    some?: Prisma.ParentEleveWhereInput;
    none?: Prisma.ParentEleveWhereInput;
};
export type ParentEleveOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ParentEleveParentIdEleveIdCompoundUniqueInput = {
    parentId: string;
    eleveId: string;
};
export type ParentEleveCountOrderByAggregateInput = {
    parentId?: Prisma.SortOrder;
    eleveId?: Prisma.SortOrder;
};
export type ParentEleveMaxOrderByAggregateInput = {
    parentId?: Prisma.SortOrder;
    eleveId?: Prisma.SortOrder;
};
export type ParentEleveMinOrderByAggregateInput = {
    parentId?: Prisma.SortOrder;
    eleveId?: Prisma.SortOrder;
};
export type ParentEleveCreateNestedManyWithoutEleveInput = {
    create?: Prisma.XOR<Prisma.ParentEleveCreateWithoutEleveInput, Prisma.ParentEleveUncheckedCreateWithoutEleveInput> | Prisma.ParentEleveCreateWithoutEleveInput[] | Prisma.ParentEleveUncheckedCreateWithoutEleveInput[];
    connectOrCreate?: Prisma.ParentEleveCreateOrConnectWithoutEleveInput | Prisma.ParentEleveCreateOrConnectWithoutEleveInput[];
    createMany?: Prisma.ParentEleveCreateManyEleveInputEnvelope;
    connect?: Prisma.ParentEleveWhereUniqueInput | Prisma.ParentEleveWhereUniqueInput[];
};
export type ParentEleveUncheckedCreateNestedManyWithoutEleveInput = {
    create?: Prisma.XOR<Prisma.ParentEleveCreateWithoutEleveInput, Prisma.ParentEleveUncheckedCreateWithoutEleveInput> | Prisma.ParentEleveCreateWithoutEleveInput[] | Prisma.ParentEleveUncheckedCreateWithoutEleveInput[];
    connectOrCreate?: Prisma.ParentEleveCreateOrConnectWithoutEleveInput | Prisma.ParentEleveCreateOrConnectWithoutEleveInput[];
    createMany?: Prisma.ParentEleveCreateManyEleveInputEnvelope;
    connect?: Prisma.ParentEleveWhereUniqueInput | Prisma.ParentEleveWhereUniqueInput[];
};
export type ParentEleveUpdateManyWithoutEleveNestedInput = {
    create?: Prisma.XOR<Prisma.ParentEleveCreateWithoutEleveInput, Prisma.ParentEleveUncheckedCreateWithoutEleveInput> | Prisma.ParentEleveCreateWithoutEleveInput[] | Prisma.ParentEleveUncheckedCreateWithoutEleveInput[];
    connectOrCreate?: Prisma.ParentEleveCreateOrConnectWithoutEleveInput | Prisma.ParentEleveCreateOrConnectWithoutEleveInput[];
    upsert?: Prisma.ParentEleveUpsertWithWhereUniqueWithoutEleveInput | Prisma.ParentEleveUpsertWithWhereUniqueWithoutEleveInput[];
    createMany?: Prisma.ParentEleveCreateManyEleveInputEnvelope;
    set?: Prisma.ParentEleveWhereUniqueInput | Prisma.ParentEleveWhereUniqueInput[];
    disconnect?: Prisma.ParentEleveWhereUniqueInput | Prisma.ParentEleveWhereUniqueInput[];
    delete?: Prisma.ParentEleveWhereUniqueInput | Prisma.ParentEleveWhereUniqueInput[];
    connect?: Prisma.ParentEleveWhereUniqueInput | Prisma.ParentEleveWhereUniqueInput[];
    update?: Prisma.ParentEleveUpdateWithWhereUniqueWithoutEleveInput | Prisma.ParentEleveUpdateWithWhereUniqueWithoutEleveInput[];
    updateMany?: Prisma.ParentEleveUpdateManyWithWhereWithoutEleveInput | Prisma.ParentEleveUpdateManyWithWhereWithoutEleveInput[];
    deleteMany?: Prisma.ParentEleveScalarWhereInput | Prisma.ParentEleveScalarWhereInput[];
};
export type ParentEleveUncheckedUpdateManyWithoutEleveNestedInput = {
    create?: Prisma.XOR<Prisma.ParentEleveCreateWithoutEleveInput, Prisma.ParentEleveUncheckedCreateWithoutEleveInput> | Prisma.ParentEleveCreateWithoutEleveInput[] | Prisma.ParentEleveUncheckedCreateWithoutEleveInput[];
    connectOrCreate?: Prisma.ParentEleveCreateOrConnectWithoutEleveInput | Prisma.ParentEleveCreateOrConnectWithoutEleveInput[];
    upsert?: Prisma.ParentEleveUpsertWithWhereUniqueWithoutEleveInput | Prisma.ParentEleveUpsertWithWhereUniqueWithoutEleveInput[];
    createMany?: Prisma.ParentEleveCreateManyEleveInputEnvelope;
    set?: Prisma.ParentEleveWhereUniqueInput | Prisma.ParentEleveWhereUniqueInput[];
    disconnect?: Prisma.ParentEleveWhereUniqueInput | Prisma.ParentEleveWhereUniqueInput[];
    delete?: Prisma.ParentEleveWhereUniqueInput | Prisma.ParentEleveWhereUniqueInput[];
    connect?: Prisma.ParentEleveWhereUniqueInput | Prisma.ParentEleveWhereUniqueInput[];
    update?: Prisma.ParentEleveUpdateWithWhereUniqueWithoutEleveInput | Prisma.ParentEleveUpdateWithWhereUniqueWithoutEleveInput[];
    updateMany?: Prisma.ParentEleveUpdateManyWithWhereWithoutEleveInput | Prisma.ParentEleveUpdateManyWithWhereWithoutEleveInput[];
    deleteMany?: Prisma.ParentEleveScalarWhereInput | Prisma.ParentEleveScalarWhereInput[];
};
export type ParentEleveCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.ParentEleveCreateWithoutParentInput, Prisma.ParentEleveUncheckedCreateWithoutParentInput> | Prisma.ParentEleveCreateWithoutParentInput[] | Prisma.ParentEleveUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ParentEleveCreateOrConnectWithoutParentInput | Prisma.ParentEleveCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.ParentEleveCreateManyParentInputEnvelope;
    connect?: Prisma.ParentEleveWhereUniqueInput | Prisma.ParentEleveWhereUniqueInput[];
};
export type ParentEleveUncheckedCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.ParentEleveCreateWithoutParentInput, Prisma.ParentEleveUncheckedCreateWithoutParentInput> | Prisma.ParentEleveCreateWithoutParentInput[] | Prisma.ParentEleveUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ParentEleveCreateOrConnectWithoutParentInput | Prisma.ParentEleveCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.ParentEleveCreateManyParentInputEnvelope;
    connect?: Prisma.ParentEleveWhereUniqueInput | Prisma.ParentEleveWhereUniqueInput[];
};
export type ParentEleveUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.ParentEleveCreateWithoutParentInput, Prisma.ParentEleveUncheckedCreateWithoutParentInput> | Prisma.ParentEleveCreateWithoutParentInput[] | Prisma.ParentEleveUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ParentEleveCreateOrConnectWithoutParentInput | Prisma.ParentEleveCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.ParentEleveUpsertWithWhereUniqueWithoutParentInput | Prisma.ParentEleveUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.ParentEleveCreateManyParentInputEnvelope;
    set?: Prisma.ParentEleveWhereUniqueInput | Prisma.ParentEleveWhereUniqueInput[];
    disconnect?: Prisma.ParentEleveWhereUniqueInput | Prisma.ParentEleveWhereUniqueInput[];
    delete?: Prisma.ParentEleveWhereUniqueInput | Prisma.ParentEleveWhereUniqueInput[];
    connect?: Prisma.ParentEleveWhereUniqueInput | Prisma.ParentEleveWhereUniqueInput[];
    update?: Prisma.ParentEleveUpdateWithWhereUniqueWithoutParentInput | Prisma.ParentEleveUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.ParentEleveUpdateManyWithWhereWithoutParentInput | Prisma.ParentEleveUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.ParentEleveScalarWhereInput | Prisma.ParentEleveScalarWhereInput[];
};
export type ParentEleveUncheckedUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.ParentEleveCreateWithoutParentInput, Prisma.ParentEleveUncheckedCreateWithoutParentInput> | Prisma.ParentEleveCreateWithoutParentInput[] | Prisma.ParentEleveUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ParentEleveCreateOrConnectWithoutParentInput | Prisma.ParentEleveCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.ParentEleveUpsertWithWhereUniqueWithoutParentInput | Prisma.ParentEleveUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.ParentEleveCreateManyParentInputEnvelope;
    set?: Prisma.ParentEleveWhereUniqueInput | Prisma.ParentEleveWhereUniqueInput[];
    disconnect?: Prisma.ParentEleveWhereUniqueInput | Prisma.ParentEleveWhereUniqueInput[];
    delete?: Prisma.ParentEleveWhereUniqueInput | Prisma.ParentEleveWhereUniqueInput[];
    connect?: Prisma.ParentEleveWhereUniqueInput | Prisma.ParentEleveWhereUniqueInput[];
    update?: Prisma.ParentEleveUpdateWithWhereUniqueWithoutParentInput | Prisma.ParentEleveUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.ParentEleveUpdateManyWithWhereWithoutParentInput | Prisma.ParentEleveUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.ParentEleveScalarWhereInput | Prisma.ParentEleveScalarWhereInput[];
};
export type ParentEleveCreateWithoutEleveInput = {
    parent: Prisma.ParentCreateNestedOneWithoutEnfantsInput;
};
export type ParentEleveUncheckedCreateWithoutEleveInput = {
    parentId: string;
};
export type ParentEleveCreateOrConnectWithoutEleveInput = {
    where: Prisma.ParentEleveWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParentEleveCreateWithoutEleveInput, Prisma.ParentEleveUncheckedCreateWithoutEleveInput>;
};
export type ParentEleveCreateManyEleveInputEnvelope = {
    data: Prisma.ParentEleveCreateManyEleveInput | Prisma.ParentEleveCreateManyEleveInput[];
};
export type ParentEleveUpsertWithWhereUniqueWithoutEleveInput = {
    where: Prisma.ParentEleveWhereUniqueInput;
    update: Prisma.XOR<Prisma.ParentEleveUpdateWithoutEleveInput, Prisma.ParentEleveUncheckedUpdateWithoutEleveInput>;
    create: Prisma.XOR<Prisma.ParentEleveCreateWithoutEleveInput, Prisma.ParentEleveUncheckedCreateWithoutEleveInput>;
};
export type ParentEleveUpdateWithWhereUniqueWithoutEleveInput = {
    where: Prisma.ParentEleveWhereUniqueInput;
    data: Prisma.XOR<Prisma.ParentEleveUpdateWithoutEleveInput, Prisma.ParentEleveUncheckedUpdateWithoutEleveInput>;
};
export type ParentEleveUpdateManyWithWhereWithoutEleveInput = {
    where: Prisma.ParentEleveScalarWhereInput;
    data: Prisma.XOR<Prisma.ParentEleveUpdateManyMutationInput, Prisma.ParentEleveUncheckedUpdateManyWithoutEleveInput>;
};
export type ParentEleveScalarWhereInput = {
    AND?: Prisma.ParentEleveScalarWhereInput | Prisma.ParentEleveScalarWhereInput[];
    OR?: Prisma.ParentEleveScalarWhereInput[];
    NOT?: Prisma.ParentEleveScalarWhereInput | Prisma.ParentEleveScalarWhereInput[];
    parentId?: Prisma.StringFilter<"ParentEleve"> | string;
    eleveId?: Prisma.StringFilter<"ParentEleve"> | string;
};
export type ParentEleveCreateWithoutParentInput = {
    eleve: Prisma.EleveCreateNestedOneWithoutParentsInput;
};
export type ParentEleveUncheckedCreateWithoutParentInput = {
    eleveId: string;
};
export type ParentEleveCreateOrConnectWithoutParentInput = {
    where: Prisma.ParentEleveWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParentEleveCreateWithoutParentInput, Prisma.ParentEleveUncheckedCreateWithoutParentInput>;
};
export type ParentEleveCreateManyParentInputEnvelope = {
    data: Prisma.ParentEleveCreateManyParentInput | Prisma.ParentEleveCreateManyParentInput[];
};
export type ParentEleveUpsertWithWhereUniqueWithoutParentInput = {
    where: Prisma.ParentEleveWhereUniqueInput;
    update: Prisma.XOR<Prisma.ParentEleveUpdateWithoutParentInput, Prisma.ParentEleveUncheckedUpdateWithoutParentInput>;
    create: Prisma.XOR<Prisma.ParentEleveCreateWithoutParentInput, Prisma.ParentEleveUncheckedCreateWithoutParentInput>;
};
export type ParentEleveUpdateWithWhereUniqueWithoutParentInput = {
    where: Prisma.ParentEleveWhereUniqueInput;
    data: Prisma.XOR<Prisma.ParentEleveUpdateWithoutParentInput, Prisma.ParentEleveUncheckedUpdateWithoutParentInput>;
};
export type ParentEleveUpdateManyWithWhereWithoutParentInput = {
    where: Prisma.ParentEleveScalarWhereInput;
    data: Prisma.XOR<Prisma.ParentEleveUpdateManyMutationInput, Prisma.ParentEleveUncheckedUpdateManyWithoutParentInput>;
};
export type ParentEleveCreateManyEleveInput = {
    parentId: string;
};
export type ParentEleveUpdateWithoutEleveInput = {
    parent?: Prisma.ParentUpdateOneRequiredWithoutEnfantsNestedInput;
};
export type ParentEleveUncheckedUpdateWithoutEleveInput = {
    parentId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ParentEleveUncheckedUpdateManyWithoutEleveInput = {
    parentId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ParentEleveCreateManyParentInput = {
    eleveId: string;
};
export type ParentEleveUpdateWithoutParentInput = {
    eleve?: Prisma.EleveUpdateOneRequiredWithoutParentsNestedInput;
};
export type ParentEleveUncheckedUpdateWithoutParentInput = {
    eleveId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ParentEleveUncheckedUpdateManyWithoutParentInput = {
    eleveId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ParentEleveSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    parentId?: boolean;
    eleveId?: boolean;
    parent?: boolean | Prisma.ParentDefaultArgs<ExtArgs>;
    eleve?: boolean | Prisma.EleveDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["parentEleve"]>;
export type ParentEleveSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    parentId?: boolean;
    eleveId?: boolean;
    parent?: boolean | Prisma.ParentDefaultArgs<ExtArgs>;
    eleve?: boolean | Prisma.EleveDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["parentEleve"]>;
export type ParentEleveSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    parentId?: boolean;
    eleveId?: boolean;
    parent?: boolean | Prisma.ParentDefaultArgs<ExtArgs>;
    eleve?: boolean | Prisma.EleveDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["parentEleve"]>;
export type ParentEleveSelectScalar = {
    parentId?: boolean;
    eleveId?: boolean;
};
export type ParentEleveOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"parentId" | "eleveId", ExtArgs["result"]["parentEleve"]>;
export type ParentEleveInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    parent?: boolean | Prisma.ParentDefaultArgs<ExtArgs>;
    eleve?: boolean | Prisma.EleveDefaultArgs<ExtArgs>;
};
export type ParentEleveIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    parent?: boolean | Prisma.ParentDefaultArgs<ExtArgs>;
    eleve?: boolean | Prisma.EleveDefaultArgs<ExtArgs>;
};
export type ParentEleveIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    parent?: boolean | Prisma.ParentDefaultArgs<ExtArgs>;
    eleve?: boolean | Prisma.EleveDefaultArgs<ExtArgs>;
};
export type $ParentElevePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ParentEleve";
    objects: {
        parent: Prisma.$ParentPayload<ExtArgs>;
        eleve: Prisma.$ElevePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        parentId: string;
        eleveId: string;
    }, ExtArgs["result"]["parentEleve"]>;
    composites: {};
};
export type ParentEleveGetPayload<S extends boolean | null | undefined | ParentEleveDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ParentElevePayload, S>;
export type ParentEleveCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ParentEleveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ParentEleveCountAggregateInputType | true;
};
export interface ParentEleveDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ParentEleve'];
        meta: {
            name: 'ParentEleve';
        };
    };
    findUnique<T extends ParentEleveFindUniqueArgs>(args: Prisma.SelectSubset<T, ParentEleveFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ParentEleveClient<runtime.Types.Result.GetResult<Prisma.$ParentElevePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ParentEleveFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ParentEleveFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParentEleveClient<runtime.Types.Result.GetResult<Prisma.$ParentElevePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ParentEleveFindFirstArgs>(args?: Prisma.SelectSubset<T, ParentEleveFindFirstArgs<ExtArgs>>): Prisma.Prisma__ParentEleveClient<runtime.Types.Result.GetResult<Prisma.$ParentElevePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ParentEleveFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ParentEleveFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParentEleveClient<runtime.Types.Result.GetResult<Prisma.$ParentElevePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ParentEleveFindManyArgs>(args?: Prisma.SelectSubset<T, ParentEleveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParentElevePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ParentEleveCreateArgs>(args: Prisma.SelectSubset<T, ParentEleveCreateArgs<ExtArgs>>): Prisma.Prisma__ParentEleveClient<runtime.Types.Result.GetResult<Prisma.$ParentElevePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ParentEleveCreateManyArgs>(args?: Prisma.SelectSubset<T, ParentEleveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ParentEleveCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ParentEleveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParentElevePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ParentEleveDeleteArgs>(args: Prisma.SelectSubset<T, ParentEleveDeleteArgs<ExtArgs>>): Prisma.Prisma__ParentEleveClient<runtime.Types.Result.GetResult<Prisma.$ParentElevePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ParentEleveUpdateArgs>(args: Prisma.SelectSubset<T, ParentEleveUpdateArgs<ExtArgs>>): Prisma.Prisma__ParentEleveClient<runtime.Types.Result.GetResult<Prisma.$ParentElevePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ParentEleveDeleteManyArgs>(args?: Prisma.SelectSubset<T, ParentEleveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ParentEleveUpdateManyArgs>(args: Prisma.SelectSubset<T, ParentEleveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ParentEleveUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ParentEleveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParentElevePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ParentEleveUpsertArgs>(args: Prisma.SelectSubset<T, ParentEleveUpsertArgs<ExtArgs>>): Prisma.Prisma__ParentEleveClient<runtime.Types.Result.GetResult<Prisma.$ParentElevePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ParentEleveCountArgs>(args?: Prisma.Subset<T, ParentEleveCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ParentEleveCountAggregateOutputType> : number>;
    aggregate<T extends ParentEleveAggregateArgs>(args: Prisma.Subset<T, ParentEleveAggregateArgs>): Prisma.PrismaPromise<GetParentEleveAggregateType<T>>;
    groupBy<T extends ParentEleveGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ParentEleveGroupByArgs['orderBy'];
    } : {
        orderBy?: ParentEleveGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ParentEleveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParentEleveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ParentEleveFieldRefs;
}
export interface Prisma__ParentEleveClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    parent<T extends Prisma.ParentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ParentDefaultArgs<ExtArgs>>): Prisma.Prisma__ParentClient<runtime.Types.Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    eleve<T extends Prisma.EleveDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EleveDefaultArgs<ExtArgs>>): Prisma.Prisma__EleveClient<runtime.Types.Result.GetResult<Prisma.$ElevePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ParentEleveFieldRefs {
    readonly parentId: Prisma.FieldRef<"ParentEleve", 'String'>;
    readonly eleveId: Prisma.FieldRef<"ParentEleve", 'String'>;
}
export type ParentEleveFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentEleveSelect<ExtArgs> | null;
    omit?: Prisma.ParentEleveOmit<ExtArgs> | null;
    include?: Prisma.ParentEleveInclude<ExtArgs> | null;
    where: Prisma.ParentEleveWhereUniqueInput;
};
export type ParentEleveFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentEleveSelect<ExtArgs> | null;
    omit?: Prisma.ParentEleveOmit<ExtArgs> | null;
    include?: Prisma.ParentEleveInclude<ExtArgs> | null;
    where: Prisma.ParentEleveWhereUniqueInput;
};
export type ParentEleveFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentEleveSelect<ExtArgs> | null;
    omit?: Prisma.ParentEleveOmit<ExtArgs> | null;
    include?: Prisma.ParentEleveInclude<ExtArgs> | null;
    where?: Prisma.ParentEleveWhereInput;
    orderBy?: Prisma.ParentEleveOrderByWithRelationInput | Prisma.ParentEleveOrderByWithRelationInput[];
    cursor?: Prisma.ParentEleveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParentEleveScalarFieldEnum | Prisma.ParentEleveScalarFieldEnum[];
};
export type ParentEleveFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentEleveSelect<ExtArgs> | null;
    omit?: Prisma.ParentEleveOmit<ExtArgs> | null;
    include?: Prisma.ParentEleveInclude<ExtArgs> | null;
    where?: Prisma.ParentEleveWhereInput;
    orderBy?: Prisma.ParentEleveOrderByWithRelationInput | Prisma.ParentEleveOrderByWithRelationInput[];
    cursor?: Prisma.ParentEleveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParentEleveScalarFieldEnum | Prisma.ParentEleveScalarFieldEnum[];
};
export type ParentEleveFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentEleveSelect<ExtArgs> | null;
    omit?: Prisma.ParentEleveOmit<ExtArgs> | null;
    include?: Prisma.ParentEleveInclude<ExtArgs> | null;
    where?: Prisma.ParentEleveWhereInput;
    orderBy?: Prisma.ParentEleveOrderByWithRelationInput | Prisma.ParentEleveOrderByWithRelationInput[];
    cursor?: Prisma.ParentEleveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParentEleveScalarFieldEnum | Prisma.ParentEleveScalarFieldEnum[];
};
export type ParentEleveCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentEleveSelect<ExtArgs> | null;
    omit?: Prisma.ParentEleveOmit<ExtArgs> | null;
    include?: Prisma.ParentEleveInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParentEleveCreateInput, Prisma.ParentEleveUncheckedCreateInput>;
};
export type ParentEleveCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ParentEleveCreateManyInput | Prisma.ParentEleveCreateManyInput[];
};
export type ParentEleveCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentEleveSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ParentEleveOmit<ExtArgs> | null;
    data: Prisma.ParentEleveCreateManyInput | Prisma.ParentEleveCreateManyInput[];
    include?: Prisma.ParentEleveIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ParentEleveUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentEleveSelect<ExtArgs> | null;
    omit?: Prisma.ParentEleveOmit<ExtArgs> | null;
    include?: Prisma.ParentEleveInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParentEleveUpdateInput, Prisma.ParentEleveUncheckedUpdateInput>;
    where: Prisma.ParentEleveWhereUniqueInput;
};
export type ParentEleveUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ParentEleveUpdateManyMutationInput, Prisma.ParentEleveUncheckedUpdateManyInput>;
    where?: Prisma.ParentEleveWhereInput;
    limit?: number;
};
export type ParentEleveUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentEleveSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ParentEleveOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParentEleveUpdateManyMutationInput, Prisma.ParentEleveUncheckedUpdateManyInput>;
    where?: Prisma.ParentEleveWhereInput;
    limit?: number;
    include?: Prisma.ParentEleveIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ParentEleveUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentEleveSelect<ExtArgs> | null;
    omit?: Prisma.ParentEleveOmit<ExtArgs> | null;
    include?: Prisma.ParentEleveInclude<ExtArgs> | null;
    where: Prisma.ParentEleveWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParentEleveCreateInput, Prisma.ParentEleveUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ParentEleveUpdateInput, Prisma.ParentEleveUncheckedUpdateInput>;
};
export type ParentEleveDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentEleveSelect<ExtArgs> | null;
    omit?: Prisma.ParentEleveOmit<ExtArgs> | null;
    include?: Prisma.ParentEleveInclude<ExtArgs> | null;
    where: Prisma.ParentEleveWhereUniqueInput;
};
export type ParentEleveDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParentEleveWhereInput;
    limit?: number;
};
export type ParentEleveDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentEleveSelect<ExtArgs> | null;
    omit?: Prisma.ParentEleveOmit<ExtArgs> | null;
    include?: Prisma.ParentEleveInclude<ExtArgs> | null;
};

import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProfesseurClasseModel = runtime.Types.Result.DefaultSelection<Prisma.$ProfesseurClassePayload>;
export type AggregateProfesseurClasse = {
    _count: ProfesseurClasseCountAggregateOutputType | null;
    _min: ProfesseurClasseMinAggregateOutputType | null;
    _max: ProfesseurClasseMaxAggregateOutputType | null;
};
export type ProfesseurClasseMinAggregateOutputType = {
    professeurId: string | null;
    classeId: string | null;
};
export type ProfesseurClasseMaxAggregateOutputType = {
    professeurId: string | null;
    classeId: string | null;
};
export type ProfesseurClasseCountAggregateOutputType = {
    professeurId: number;
    classeId: number;
    _all: number;
};
export type ProfesseurClasseMinAggregateInputType = {
    professeurId?: true;
    classeId?: true;
};
export type ProfesseurClasseMaxAggregateInputType = {
    professeurId?: true;
    classeId?: true;
};
export type ProfesseurClasseCountAggregateInputType = {
    professeurId?: true;
    classeId?: true;
    _all?: true;
};
export type ProfesseurClasseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfesseurClasseWhereInput;
    orderBy?: Prisma.ProfesseurClasseOrderByWithRelationInput | Prisma.ProfesseurClasseOrderByWithRelationInput[];
    cursor?: Prisma.ProfesseurClasseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProfesseurClasseCountAggregateInputType;
    _min?: ProfesseurClasseMinAggregateInputType;
    _max?: ProfesseurClasseMaxAggregateInputType;
};
export type GetProfesseurClasseAggregateType<T extends ProfesseurClasseAggregateArgs> = {
    [P in keyof T & keyof AggregateProfesseurClasse]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProfesseurClasse[P]> : Prisma.GetScalarType<T[P], AggregateProfesseurClasse[P]>;
};
export type ProfesseurClasseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfesseurClasseWhereInput;
    orderBy?: Prisma.ProfesseurClasseOrderByWithAggregationInput | Prisma.ProfesseurClasseOrderByWithAggregationInput[];
    by: Prisma.ProfesseurClasseScalarFieldEnum[] | Prisma.ProfesseurClasseScalarFieldEnum;
    having?: Prisma.ProfesseurClasseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfesseurClasseCountAggregateInputType | true;
    _min?: ProfesseurClasseMinAggregateInputType;
    _max?: ProfesseurClasseMaxAggregateInputType;
};
export type ProfesseurClasseGroupByOutputType = {
    professeurId: string;
    classeId: string;
    _count: ProfesseurClasseCountAggregateOutputType | null;
    _min: ProfesseurClasseMinAggregateOutputType | null;
    _max: ProfesseurClasseMaxAggregateOutputType | null;
};
export type GetProfesseurClasseGroupByPayload<T extends ProfesseurClasseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProfesseurClasseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProfesseurClasseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProfesseurClasseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProfesseurClasseGroupByOutputType[P]>;
}>>;
export type ProfesseurClasseWhereInput = {
    AND?: Prisma.ProfesseurClasseWhereInput | Prisma.ProfesseurClasseWhereInput[];
    OR?: Prisma.ProfesseurClasseWhereInput[];
    NOT?: Prisma.ProfesseurClasseWhereInput | Prisma.ProfesseurClasseWhereInput[];
    professeurId?: Prisma.StringFilter<"ProfesseurClasse"> | string;
    classeId?: Prisma.StringFilter<"ProfesseurClasse"> | string;
    professeur?: Prisma.XOR<Prisma.ProfesseurScalarRelationFilter, Prisma.ProfesseurWhereInput>;
    classe?: Prisma.XOR<Prisma.ClasseScalarRelationFilter, Prisma.ClasseWhereInput>;
};
export type ProfesseurClasseOrderByWithRelationInput = {
    professeurId?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
    professeur?: Prisma.ProfesseurOrderByWithRelationInput;
    classe?: Prisma.ClasseOrderByWithRelationInput;
};
export type ProfesseurClasseWhereUniqueInput = Prisma.AtLeast<{
    professeurId_classeId?: Prisma.ProfesseurClasseProfesseurIdClasseIdCompoundUniqueInput;
    AND?: Prisma.ProfesseurClasseWhereInput | Prisma.ProfesseurClasseWhereInput[];
    OR?: Prisma.ProfesseurClasseWhereInput[];
    NOT?: Prisma.ProfesseurClasseWhereInput | Prisma.ProfesseurClasseWhereInput[];
    professeurId?: Prisma.StringFilter<"ProfesseurClasse"> | string;
    classeId?: Prisma.StringFilter<"ProfesseurClasse"> | string;
    professeur?: Prisma.XOR<Prisma.ProfesseurScalarRelationFilter, Prisma.ProfesseurWhereInput>;
    classe?: Prisma.XOR<Prisma.ClasseScalarRelationFilter, Prisma.ClasseWhereInput>;
}, "professeurId_classeId">;
export type ProfesseurClasseOrderByWithAggregationInput = {
    professeurId?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
    _count?: Prisma.ProfesseurClasseCountOrderByAggregateInput;
    _max?: Prisma.ProfesseurClasseMaxOrderByAggregateInput;
    _min?: Prisma.ProfesseurClasseMinOrderByAggregateInput;
};
export type ProfesseurClasseScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProfesseurClasseScalarWhereWithAggregatesInput | Prisma.ProfesseurClasseScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProfesseurClasseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProfesseurClasseScalarWhereWithAggregatesInput | Prisma.ProfesseurClasseScalarWhereWithAggregatesInput[];
    professeurId?: Prisma.StringWithAggregatesFilter<"ProfesseurClasse"> | string;
    classeId?: Prisma.StringWithAggregatesFilter<"ProfesseurClasse"> | string;
};
export type ProfesseurClasseCreateInput = {
    professeur: Prisma.ProfesseurCreateNestedOneWithoutClassesInput;
    classe: Prisma.ClasseCreateNestedOneWithoutProfesseursInput;
};
export type ProfesseurClasseUncheckedCreateInput = {
    professeurId: string;
    classeId: string;
};
export type ProfesseurClasseUpdateInput = {
    professeur?: Prisma.ProfesseurUpdateOneRequiredWithoutClassesNestedInput;
    classe?: Prisma.ClasseUpdateOneRequiredWithoutProfesseursNestedInput;
};
export type ProfesseurClasseUncheckedUpdateInput = {
    professeurId?: Prisma.StringFieldUpdateOperationsInput | string;
    classeId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProfesseurClasseCreateManyInput = {
    professeurId: string;
    classeId: string;
};
export type ProfesseurClasseUpdateManyMutationInput = {};
export type ProfesseurClasseUncheckedUpdateManyInput = {
    professeurId?: Prisma.StringFieldUpdateOperationsInput | string;
    classeId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProfesseurClasseListRelationFilter = {
    every?: Prisma.ProfesseurClasseWhereInput;
    some?: Prisma.ProfesseurClasseWhereInput;
    none?: Prisma.ProfesseurClasseWhereInput;
};
export type ProfesseurClasseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProfesseurClasseProfesseurIdClasseIdCompoundUniqueInput = {
    professeurId: string;
    classeId: string;
};
export type ProfesseurClasseCountOrderByAggregateInput = {
    professeurId?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
};
export type ProfesseurClasseMaxOrderByAggregateInput = {
    professeurId?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
};
export type ProfesseurClasseMinOrderByAggregateInput = {
    professeurId?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
};
export type ProfesseurClasseCreateNestedManyWithoutProfesseurInput = {
    create?: Prisma.XOR<Prisma.ProfesseurClasseCreateWithoutProfesseurInput, Prisma.ProfesseurClasseUncheckedCreateWithoutProfesseurInput> | Prisma.ProfesseurClasseCreateWithoutProfesseurInput[] | Prisma.ProfesseurClasseUncheckedCreateWithoutProfesseurInput[];
    connectOrCreate?: Prisma.ProfesseurClasseCreateOrConnectWithoutProfesseurInput | Prisma.ProfesseurClasseCreateOrConnectWithoutProfesseurInput[];
    createMany?: Prisma.ProfesseurClasseCreateManyProfesseurInputEnvelope;
    connect?: Prisma.ProfesseurClasseWhereUniqueInput | Prisma.ProfesseurClasseWhereUniqueInput[];
};
export type ProfesseurClasseUncheckedCreateNestedManyWithoutProfesseurInput = {
    create?: Prisma.XOR<Prisma.ProfesseurClasseCreateWithoutProfesseurInput, Prisma.ProfesseurClasseUncheckedCreateWithoutProfesseurInput> | Prisma.ProfesseurClasseCreateWithoutProfesseurInput[] | Prisma.ProfesseurClasseUncheckedCreateWithoutProfesseurInput[];
    connectOrCreate?: Prisma.ProfesseurClasseCreateOrConnectWithoutProfesseurInput | Prisma.ProfesseurClasseCreateOrConnectWithoutProfesseurInput[];
    createMany?: Prisma.ProfesseurClasseCreateManyProfesseurInputEnvelope;
    connect?: Prisma.ProfesseurClasseWhereUniqueInput | Prisma.ProfesseurClasseWhereUniqueInput[];
};
export type ProfesseurClasseUpdateManyWithoutProfesseurNestedInput = {
    create?: Prisma.XOR<Prisma.ProfesseurClasseCreateWithoutProfesseurInput, Prisma.ProfesseurClasseUncheckedCreateWithoutProfesseurInput> | Prisma.ProfesseurClasseCreateWithoutProfesseurInput[] | Prisma.ProfesseurClasseUncheckedCreateWithoutProfesseurInput[];
    connectOrCreate?: Prisma.ProfesseurClasseCreateOrConnectWithoutProfesseurInput | Prisma.ProfesseurClasseCreateOrConnectWithoutProfesseurInput[];
    upsert?: Prisma.ProfesseurClasseUpsertWithWhereUniqueWithoutProfesseurInput | Prisma.ProfesseurClasseUpsertWithWhereUniqueWithoutProfesseurInput[];
    createMany?: Prisma.ProfesseurClasseCreateManyProfesseurInputEnvelope;
    set?: Prisma.ProfesseurClasseWhereUniqueInput | Prisma.ProfesseurClasseWhereUniqueInput[];
    disconnect?: Prisma.ProfesseurClasseWhereUniqueInput | Prisma.ProfesseurClasseWhereUniqueInput[];
    delete?: Prisma.ProfesseurClasseWhereUniqueInput | Prisma.ProfesseurClasseWhereUniqueInput[];
    connect?: Prisma.ProfesseurClasseWhereUniqueInput | Prisma.ProfesseurClasseWhereUniqueInput[];
    update?: Prisma.ProfesseurClasseUpdateWithWhereUniqueWithoutProfesseurInput | Prisma.ProfesseurClasseUpdateWithWhereUniqueWithoutProfesseurInput[];
    updateMany?: Prisma.ProfesseurClasseUpdateManyWithWhereWithoutProfesseurInput | Prisma.ProfesseurClasseUpdateManyWithWhereWithoutProfesseurInput[];
    deleteMany?: Prisma.ProfesseurClasseScalarWhereInput | Prisma.ProfesseurClasseScalarWhereInput[];
};
export type ProfesseurClasseUncheckedUpdateManyWithoutProfesseurNestedInput = {
    create?: Prisma.XOR<Prisma.ProfesseurClasseCreateWithoutProfesseurInput, Prisma.ProfesseurClasseUncheckedCreateWithoutProfesseurInput> | Prisma.ProfesseurClasseCreateWithoutProfesseurInput[] | Prisma.ProfesseurClasseUncheckedCreateWithoutProfesseurInput[];
    connectOrCreate?: Prisma.ProfesseurClasseCreateOrConnectWithoutProfesseurInput | Prisma.ProfesseurClasseCreateOrConnectWithoutProfesseurInput[];
    upsert?: Prisma.ProfesseurClasseUpsertWithWhereUniqueWithoutProfesseurInput | Prisma.ProfesseurClasseUpsertWithWhereUniqueWithoutProfesseurInput[];
    createMany?: Prisma.ProfesseurClasseCreateManyProfesseurInputEnvelope;
    set?: Prisma.ProfesseurClasseWhereUniqueInput | Prisma.ProfesseurClasseWhereUniqueInput[];
    disconnect?: Prisma.ProfesseurClasseWhereUniqueInput | Prisma.ProfesseurClasseWhereUniqueInput[];
    delete?: Prisma.ProfesseurClasseWhereUniqueInput | Prisma.ProfesseurClasseWhereUniqueInput[];
    connect?: Prisma.ProfesseurClasseWhereUniqueInput | Prisma.ProfesseurClasseWhereUniqueInput[];
    update?: Prisma.ProfesseurClasseUpdateWithWhereUniqueWithoutProfesseurInput | Prisma.ProfesseurClasseUpdateWithWhereUniqueWithoutProfesseurInput[];
    updateMany?: Prisma.ProfesseurClasseUpdateManyWithWhereWithoutProfesseurInput | Prisma.ProfesseurClasseUpdateManyWithWhereWithoutProfesseurInput[];
    deleteMany?: Prisma.ProfesseurClasseScalarWhereInput | Prisma.ProfesseurClasseScalarWhereInput[];
};
export type ProfesseurClasseCreateNestedManyWithoutClasseInput = {
    create?: Prisma.XOR<Prisma.ProfesseurClasseCreateWithoutClasseInput, Prisma.ProfesseurClasseUncheckedCreateWithoutClasseInput> | Prisma.ProfesseurClasseCreateWithoutClasseInput[] | Prisma.ProfesseurClasseUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.ProfesseurClasseCreateOrConnectWithoutClasseInput | Prisma.ProfesseurClasseCreateOrConnectWithoutClasseInput[];
    createMany?: Prisma.ProfesseurClasseCreateManyClasseInputEnvelope;
    connect?: Prisma.ProfesseurClasseWhereUniqueInput | Prisma.ProfesseurClasseWhereUniqueInput[];
};
export type ProfesseurClasseUncheckedCreateNestedManyWithoutClasseInput = {
    create?: Prisma.XOR<Prisma.ProfesseurClasseCreateWithoutClasseInput, Prisma.ProfesseurClasseUncheckedCreateWithoutClasseInput> | Prisma.ProfesseurClasseCreateWithoutClasseInput[] | Prisma.ProfesseurClasseUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.ProfesseurClasseCreateOrConnectWithoutClasseInput | Prisma.ProfesseurClasseCreateOrConnectWithoutClasseInput[];
    createMany?: Prisma.ProfesseurClasseCreateManyClasseInputEnvelope;
    connect?: Prisma.ProfesseurClasseWhereUniqueInput | Prisma.ProfesseurClasseWhereUniqueInput[];
};
export type ProfesseurClasseUpdateManyWithoutClasseNestedInput = {
    create?: Prisma.XOR<Prisma.ProfesseurClasseCreateWithoutClasseInput, Prisma.ProfesseurClasseUncheckedCreateWithoutClasseInput> | Prisma.ProfesseurClasseCreateWithoutClasseInput[] | Prisma.ProfesseurClasseUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.ProfesseurClasseCreateOrConnectWithoutClasseInput | Prisma.ProfesseurClasseCreateOrConnectWithoutClasseInput[];
    upsert?: Prisma.ProfesseurClasseUpsertWithWhereUniqueWithoutClasseInput | Prisma.ProfesseurClasseUpsertWithWhereUniqueWithoutClasseInput[];
    createMany?: Prisma.ProfesseurClasseCreateManyClasseInputEnvelope;
    set?: Prisma.ProfesseurClasseWhereUniqueInput | Prisma.ProfesseurClasseWhereUniqueInput[];
    disconnect?: Prisma.ProfesseurClasseWhereUniqueInput | Prisma.ProfesseurClasseWhereUniqueInput[];
    delete?: Prisma.ProfesseurClasseWhereUniqueInput | Prisma.ProfesseurClasseWhereUniqueInput[];
    connect?: Prisma.ProfesseurClasseWhereUniqueInput | Prisma.ProfesseurClasseWhereUniqueInput[];
    update?: Prisma.ProfesseurClasseUpdateWithWhereUniqueWithoutClasseInput | Prisma.ProfesseurClasseUpdateWithWhereUniqueWithoutClasseInput[];
    updateMany?: Prisma.ProfesseurClasseUpdateManyWithWhereWithoutClasseInput | Prisma.ProfesseurClasseUpdateManyWithWhereWithoutClasseInput[];
    deleteMany?: Prisma.ProfesseurClasseScalarWhereInput | Prisma.ProfesseurClasseScalarWhereInput[];
};
export type ProfesseurClasseUncheckedUpdateManyWithoutClasseNestedInput = {
    create?: Prisma.XOR<Prisma.ProfesseurClasseCreateWithoutClasseInput, Prisma.ProfesseurClasseUncheckedCreateWithoutClasseInput> | Prisma.ProfesseurClasseCreateWithoutClasseInput[] | Prisma.ProfesseurClasseUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.ProfesseurClasseCreateOrConnectWithoutClasseInput | Prisma.ProfesseurClasseCreateOrConnectWithoutClasseInput[];
    upsert?: Prisma.ProfesseurClasseUpsertWithWhereUniqueWithoutClasseInput | Prisma.ProfesseurClasseUpsertWithWhereUniqueWithoutClasseInput[];
    createMany?: Prisma.ProfesseurClasseCreateManyClasseInputEnvelope;
    set?: Prisma.ProfesseurClasseWhereUniqueInput | Prisma.ProfesseurClasseWhereUniqueInput[];
    disconnect?: Prisma.ProfesseurClasseWhereUniqueInput | Prisma.ProfesseurClasseWhereUniqueInput[];
    delete?: Prisma.ProfesseurClasseWhereUniqueInput | Prisma.ProfesseurClasseWhereUniqueInput[];
    connect?: Prisma.ProfesseurClasseWhereUniqueInput | Prisma.ProfesseurClasseWhereUniqueInput[];
    update?: Prisma.ProfesseurClasseUpdateWithWhereUniqueWithoutClasseInput | Prisma.ProfesseurClasseUpdateWithWhereUniqueWithoutClasseInput[];
    updateMany?: Prisma.ProfesseurClasseUpdateManyWithWhereWithoutClasseInput | Prisma.ProfesseurClasseUpdateManyWithWhereWithoutClasseInput[];
    deleteMany?: Prisma.ProfesseurClasseScalarWhereInput | Prisma.ProfesseurClasseScalarWhereInput[];
};
export type ProfesseurClasseCreateWithoutProfesseurInput = {
    classe: Prisma.ClasseCreateNestedOneWithoutProfesseursInput;
};
export type ProfesseurClasseUncheckedCreateWithoutProfesseurInput = {
    classeId: string;
};
export type ProfesseurClasseCreateOrConnectWithoutProfesseurInput = {
    where: Prisma.ProfesseurClasseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfesseurClasseCreateWithoutProfesseurInput, Prisma.ProfesseurClasseUncheckedCreateWithoutProfesseurInput>;
};
export type ProfesseurClasseCreateManyProfesseurInputEnvelope = {
    data: Prisma.ProfesseurClasseCreateManyProfesseurInput | Prisma.ProfesseurClasseCreateManyProfesseurInput[];
};
export type ProfesseurClasseUpsertWithWhereUniqueWithoutProfesseurInput = {
    where: Prisma.ProfesseurClasseWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProfesseurClasseUpdateWithoutProfesseurInput, Prisma.ProfesseurClasseUncheckedUpdateWithoutProfesseurInput>;
    create: Prisma.XOR<Prisma.ProfesseurClasseCreateWithoutProfesseurInput, Prisma.ProfesseurClasseUncheckedCreateWithoutProfesseurInput>;
};
export type ProfesseurClasseUpdateWithWhereUniqueWithoutProfesseurInput = {
    where: Prisma.ProfesseurClasseWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProfesseurClasseUpdateWithoutProfesseurInput, Prisma.ProfesseurClasseUncheckedUpdateWithoutProfesseurInput>;
};
export type ProfesseurClasseUpdateManyWithWhereWithoutProfesseurInput = {
    where: Prisma.ProfesseurClasseScalarWhereInput;
    data: Prisma.XOR<Prisma.ProfesseurClasseUpdateManyMutationInput, Prisma.ProfesseurClasseUncheckedUpdateManyWithoutProfesseurInput>;
};
export type ProfesseurClasseScalarWhereInput = {
    AND?: Prisma.ProfesseurClasseScalarWhereInput | Prisma.ProfesseurClasseScalarWhereInput[];
    OR?: Prisma.ProfesseurClasseScalarWhereInput[];
    NOT?: Prisma.ProfesseurClasseScalarWhereInput | Prisma.ProfesseurClasseScalarWhereInput[];
    professeurId?: Prisma.StringFilter<"ProfesseurClasse"> | string;
    classeId?: Prisma.StringFilter<"ProfesseurClasse"> | string;
};
export type ProfesseurClasseCreateWithoutClasseInput = {
    professeur: Prisma.ProfesseurCreateNestedOneWithoutClassesInput;
};
export type ProfesseurClasseUncheckedCreateWithoutClasseInput = {
    professeurId: string;
};
export type ProfesseurClasseCreateOrConnectWithoutClasseInput = {
    where: Prisma.ProfesseurClasseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfesseurClasseCreateWithoutClasseInput, Prisma.ProfesseurClasseUncheckedCreateWithoutClasseInput>;
};
export type ProfesseurClasseCreateManyClasseInputEnvelope = {
    data: Prisma.ProfesseurClasseCreateManyClasseInput | Prisma.ProfesseurClasseCreateManyClasseInput[];
};
export type ProfesseurClasseUpsertWithWhereUniqueWithoutClasseInput = {
    where: Prisma.ProfesseurClasseWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProfesseurClasseUpdateWithoutClasseInput, Prisma.ProfesseurClasseUncheckedUpdateWithoutClasseInput>;
    create: Prisma.XOR<Prisma.ProfesseurClasseCreateWithoutClasseInput, Prisma.ProfesseurClasseUncheckedCreateWithoutClasseInput>;
};
export type ProfesseurClasseUpdateWithWhereUniqueWithoutClasseInput = {
    where: Prisma.ProfesseurClasseWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProfesseurClasseUpdateWithoutClasseInput, Prisma.ProfesseurClasseUncheckedUpdateWithoutClasseInput>;
};
export type ProfesseurClasseUpdateManyWithWhereWithoutClasseInput = {
    where: Prisma.ProfesseurClasseScalarWhereInput;
    data: Prisma.XOR<Prisma.ProfesseurClasseUpdateManyMutationInput, Prisma.ProfesseurClasseUncheckedUpdateManyWithoutClasseInput>;
};
export type ProfesseurClasseCreateManyProfesseurInput = {
    classeId: string;
};
export type ProfesseurClasseUpdateWithoutProfesseurInput = {
    classe?: Prisma.ClasseUpdateOneRequiredWithoutProfesseursNestedInput;
};
export type ProfesseurClasseUncheckedUpdateWithoutProfesseurInput = {
    classeId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProfesseurClasseUncheckedUpdateManyWithoutProfesseurInput = {
    classeId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProfesseurClasseCreateManyClasseInput = {
    professeurId: string;
};
export type ProfesseurClasseUpdateWithoutClasseInput = {
    professeur?: Prisma.ProfesseurUpdateOneRequiredWithoutClassesNestedInput;
};
export type ProfesseurClasseUncheckedUpdateWithoutClasseInput = {
    professeurId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProfesseurClasseUncheckedUpdateManyWithoutClasseInput = {
    professeurId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProfesseurClasseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    professeurId?: boolean;
    classeId?: boolean;
    professeur?: boolean | Prisma.ProfesseurDefaultArgs<ExtArgs>;
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["professeurClasse"]>;
export type ProfesseurClasseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    professeurId?: boolean;
    classeId?: boolean;
    professeur?: boolean | Prisma.ProfesseurDefaultArgs<ExtArgs>;
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["professeurClasse"]>;
export type ProfesseurClasseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    professeurId?: boolean;
    classeId?: boolean;
    professeur?: boolean | Prisma.ProfesseurDefaultArgs<ExtArgs>;
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["professeurClasse"]>;
export type ProfesseurClasseSelectScalar = {
    professeurId?: boolean;
    classeId?: boolean;
};
export type ProfesseurClasseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"professeurId" | "classeId", ExtArgs["result"]["professeurClasse"]>;
export type ProfesseurClasseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    professeur?: boolean | Prisma.ProfesseurDefaultArgs<ExtArgs>;
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
};
export type ProfesseurClasseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    professeur?: boolean | Prisma.ProfesseurDefaultArgs<ExtArgs>;
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
};
export type ProfesseurClasseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    professeur?: boolean | Prisma.ProfesseurDefaultArgs<ExtArgs>;
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
};
export type $ProfesseurClassePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProfesseurClasse";
    objects: {
        professeur: Prisma.$ProfesseurPayload<ExtArgs>;
        classe: Prisma.$ClassePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        professeurId: string;
        classeId: string;
    }, ExtArgs["result"]["professeurClasse"]>;
    composites: {};
};
export type ProfesseurClasseGetPayload<S extends boolean | null | undefined | ProfesseurClasseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProfesseurClassePayload, S>;
export type ProfesseurClasseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProfesseurClasseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProfesseurClasseCountAggregateInputType | true;
};
export interface ProfesseurClasseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProfesseurClasse'];
        meta: {
            name: 'ProfesseurClasse';
        };
    };
    findUnique<T extends ProfesseurClasseFindUniqueArgs>(args: Prisma.SelectSubset<T, ProfesseurClasseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProfesseurClasseClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurClassePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProfesseurClasseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProfesseurClasseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfesseurClasseClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurClassePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProfesseurClasseFindFirstArgs>(args?: Prisma.SelectSubset<T, ProfesseurClasseFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProfesseurClasseClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurClassePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProfesseurClasseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProfesseurClasseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfesseurClasseClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurClassePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProfesseurClasseFindManyArgs>(args?: Prisma.SelectSubset<T, ProfesseurClasseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfesseurClassePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProfesseurClasseCreateArgs>(args: Prisma.SelectSubset<T, ProfesseurClasseCreateArgs<ExtArgs>>): Prisma.Prisma__ProfesseurClasseClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurClassePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProfesseurClasseCreateManyArgs>(args?: Prisma.SelectSubset<T, ProfesseurClasseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProfesseurClasseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProfesseurClasseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfesseurClassePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProfesseurClasseDeleteArgs>(args: Prisma.SelectSubset<T, ProfesseurClasseDeleteArgs<ExtArgs>>): Prisma.Prisma__ProfesseurClasseClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurClassePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProfesseurClasseUpdateArgs>(args: Prisma.SelectSubset<T, ProfesseurClasseUpdateArgs<ExtArgs>>): Prisma.Prisma__ProfesseurClasseClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurClassePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProfesseurClasseDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProfesseurClasseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProfesseurClasseUpdateManyArgs>(args: Prisma.SelectSubset<T, ProfesseurClasseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProfesseurClasseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProfesseurClasseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfesseurClassePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProfesseurClasseUpsertArgs>(args: Prisma.SelectSubset<T, ProfesseurClasseUpsertArgs<ExtArgs>>): Prisma.Prisma__ProfesseurClasseClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurClassePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProfesseurClasseCountArgs>(args?: Prisma.Subset<T, ProfesseurClasseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProfesseurClasseCountAggregateOutputType> : number>;
    aggregate<T extends ProfesseurClasseAggregateArgs>(args: Prisma.Subset<T, ProfesseurClasseAggregateArgs>): Prisma.PrismaPromise<GetProfesseurClasseAggregateType<T>>;
    groupBy<T extends ProfesseurClasseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProfesseurClasseGroupByArgs['orderBy'];
    } : {
        orderBy?: ProfesseurClasseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProfesseurClasseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfesseurClasseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProfesseurClasseFieldRefs;
}
export interface Prisma__ProfesseurClasseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    professeur<T extends Prisma.ProfesseurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfesseurDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfesseurClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    classe<T extends Prisma.ClasseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClasseDefaultArgs<ExtArgs>>): Prisma.Prisma__ClasseClient<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProfesseurClasseFieldRefs {
    readonly professeurId: Prisma.FieldRef<"ProfesseurClasse", 'String'>;
    readonly classeId: Prisma.FieldRef<"ProfesseurClasse", 'String'>;
}
export type ProfesseurClasseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurClasseSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurClasseOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurClasseInclude<ExtArgs> | null;
    where: Prisma.ProfesseurClasseWhereUniqueInput;
};
export type ProfesseurClasseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurClasseSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurClasseOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurClasseInclude<ExtArgs> | null;
    where: Prisma.ProfesseurClasseWhereUniqueInput;
};
export type ProfesseurClasseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurClasseSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurClasseOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurClasseInclude<ExtArgs> | null;
    where?: Prisma.ProfesseurClasseWhereInput;
    orderBy?: Prisma.ProfesseurClasseOrderByWithRelationInput | Prisma.ProfesseurClasseOrderByWithRelationInput[];
    cursor?: Prisma.ProfesseurClasseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfesseurClasseScalarFieldEnum | Prisma.ProfesseurClasseScalarFieldEnum[];
};
export type ProfesseurClasseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurClasseSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurClasseOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurClasseInclude<ExtArgs> | null;
    where?: Prisma.ProfesseurClasseWhereInput;
    orderBy?: Prisma.ProfesseurClasseOrderByWithRelationInput | Prisma.ProfesseurClasseOrderByWithRelationInput[];
    cursor?: Prisma.ProfesseurClasseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfesseurClasseScalarFieldEnum | Prisma.ProfesseurClasseScalarFieldEnum[];
};
export type ProfesseurClasseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurClasseSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurClasseOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurClasseInclude<ExtArgs> | null;
    where?: Prisma.ProfesseurClasseWhereInput;
    orderBy?: Prisma.ProfesseurClasseOrderByWithRelationInput | Prisma.ProfesseurClasseOrderByWithRelationInput[];
    cursor?: Prisma.ProfesseurClasseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfesseurClasseScalarFieldEnum | Prisma.ProfesseurClasseScalarFieldEnum[];
};
export type ProfesseurClasseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurClasseSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurClasseOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurClasseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfesseurClasseCreateInput, Prisma.ProfesseurClasseUncheckedCreateInput>;
};
export type ProfesseurClasseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProfesseurClasseCreateManyInput | Prisma.ProfesseurClasseCreateManyInput[];
};
export type ProfesseurClasseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurClasseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProfesseurClasseOmit<ExtArgs> | null;
    data: Prisma.ProfesseurClasseCreateManyInput | Prisma.ProfesseurClasseCreateManyInput[];
    include?: Prisma.ProfesseurClasseIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProfesseurClasseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurClasseSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurClasseOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurClasseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfesseurClasseUpdateInput, Prisma.ProfesseurClasseUncheckedUpdateInput>;
    where: Prisma.ProfesseurClasseWhereUniqueInput;
};
export type ProfesseurClasseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProfesseurClasseUpdateManyMutationInput, Prisma.ProfesseurClasseUncheckedUpdateManyInput>;
    where?: Prisma.ProfesseurClasseWhereInput;
    limit?: number;
};
export type ProfesseurClasseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurClasseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProfesseurClasseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfesseurClasseUpdateManyMutationInput, Prisma.ProfesseurClasseUncheckedUpdateManyInput>;
    where?: Prisma.ProfesseurClasseWhereInput;
    limit?: number;
    include?: Prisma.ProfesseurClasseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProfesseurClasseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurClasseSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurClasseOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurClasseInclude<ExtArgs> | null;
    where: Prisma.ProfesseurClasseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfesseurClasseCreateInput, Prisma.ProfesseurClasseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProfesseurClasseUpdateInput, Prisma.ProfesseurClasseUncheckedUpdateInput>;
};
export type ProfesseurClasseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurClasseSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurClasseOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurClasseInclude<ExtArgs> | null;
    where: Prisma.ProfesseurClasseWhereUniqueInput;
};
export type ProfesseurClasseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfesseurClasseWhereInput;
    limit?: number;
};
export type ProfesseurClasseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurClasseSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurClasseOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurClasseInclude<ExtArgs> | null;
};

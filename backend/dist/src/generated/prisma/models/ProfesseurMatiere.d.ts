import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProfesseurMatiereModel = runtime.Types.Result.DefaultSelection<Prisma.$ProfesseurMatierePayload>;
export type AggregateProfesseurMatiere = {
    _count: ProfesseurMatiereCountAggregateOutputType | null;
    _min: ProfesseurMatiereMinAggregateOutputType | null;
    _max: ProfesseurMatiereMaxAggregateOutputType | null;
};
export type ProfesseurMatiereMinAggregateOutputType = {
    professeurId: string | null;
    matiereId: string | null;
};
export type ProfesseurMatiereMaxAggregateOutputType = {
    professeurId: string | null;
    matiereId: string | null;
};
export type ProfesseurMatiereCountAggregateOutputType = {
    professeurId: number;
    matiereId: number;
    _all: number;
};
export type ProfesseurMatiereMinAggregateInputType = {
    professeurId?: true;
    matiereId?: true;
};
export type ProfesseurMatiereMaxAggregateInputType = {
    professeurId?: true;
    matiereId?: true;
};
export type ProfesseurMatiereCountAggregateInputType = {
    professeurId?: true;
    matiereId?: true;
    _all?: true;
};
export type ProfesseurMatiereAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfesseurMatiereWhereInput;
    orderBy?: Prisma.ProfesseurMatiereOrderByWithRelationInput | Prisma.ProfesseurMatiereOrderByWithRelationInput[];
    cursor?: Prisma.ProfesseurMatiereWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProfesseurMatiereCountAggregateInputType;
    _min?: ProfesseurMatiereMinAggregateInputType;
    _max?: ProfesseurMatiereMaxAggregateInputType;
};
export type GetProfesseurMatiereAggregateType<T extends ProfesseurMatiereAggregateArgs> = {
    [P in keyof T & keyof AggregateProfesseurMatiere]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProfesseurMatiere[P]> : Prisma.GetScalarType<T[P], AggregateProfesseurMatiere[P]>;
};
export type ProfesseurMatiereGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfesseurMatiereWhereInput;
    orderBy?: Prisma.ProfesseurMatiereOrderByWithAggregationInput | Prisma.ProfesseurMatiereOrderByWithAggregationInput[];
    by: Prisma.ProfesseurMatiereScalarFieldEnum[] | Prisma.ProfesseurMatiereScalarFieldEnum;
    having?: Prisma.ProfesseurMatiereScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfesseurMatiereCountAggregateInputType | true;
    _min?: ProfesseurMatiereMinAggregateInputType;
    _max?: ProfesseurMatiereMaxAggregateInputType;
};
export type ProfesseurMatiereGroupByOutputType = {
    professeurId: string;
    matiereId: string;
    _count: ProfesseurMatiereCountAggregateOutputType | null;
    _min: ProfesseurMatiereMinAggregateOutputType | null;
    _max: ProfesseurMatiereMaxAggregateOutputType | null;
};
export type GetProfesseurMatiereGroupByPayload<T extends ProfesseurMatiereGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProfesseurMatiereGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProfesseurMatiereGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProfesseurMatiereGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProfesseurMatiereGroupByOutputType[P]>;
}>>;
export type ProfesseurMatiereWhereInput = {
    AND?: Prisma.ProfesseurMatiereWhereInput | Prisma.ProfesseurMatiereWhereInput[];
    OR?: Prisma.ProfesseurMatiereWhereInput[];
    NOT?: Prisma.ProfesseurMatiereWhereInput | Prisma.ProfesseurMatiereWhereInput[];
    professeurId?: Prisma.StringFilter<"ProfesseurMatiere"> | string;
    matiereId?: Prisma.StringFilter<"ProfesseurMatiere"> | string;
    professeur?: Prisma.XOR<Prisma.ProfesseurScalarRelationFilter, Prisma.ProfesseurWhereInput>;
    matiere?: Prisma.XOR<Prisma.MatiereScalarRelationFilter, Prisma.MatiereWhereInput>;
};
export type ProfesseurMatiereOrderByWithRelationInput = {
    professeurId?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    professeur?: Prisma.ProfesseurOrderByWithRelationInput;
    matiere?: Prisma.MatiereOrderByWithRelationInput;
};
export type ProfesseurMatiereWhereUniqueInput = Prisma.AtLeast<{
    professeurId_matiereId?: Prisma.ProfesseurMatiereProfesseurIdMatiereIdCompoundUniqueInput;
    AND?: Prisma.ProfesseurMatiereWhereInput | Prisma.ProfesseurMatiereWhereInput[];
    OR?: Prisma.ProfesseurMatiereWhereInput[];
    NOT?: Prisma.ProfesseurMatiereWhereInput | Prisma.ProfesseurMatiereWhereInput[];
    professeurId?: Prisma.StringFilter<"ProfesseurMatiere"> | string;
    matiereId?: Prisma.StringFilter<"ProfesseurMatiere"> | string;
    professeur?: Prisma.XOR<Prisma.ProfesseurScalarRelationFilter, Prisma.ProfesseurWhereInput>;
    matiere?: Prisma.XOR<Prisma.MatiereScalarRelationFilter, Prisma.MatiereWhereInput>;
}, "professeurId_matiereId">;
export type ProfesseurMatiereOrderByWithAggregationInput = {
    professeurId?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    _count?: Prisma.ProfesseurMatiereCountOrderByAggregateInput;
    _max?: Prisma.ProfesseurMatiereMaxOrderByAggregateInput;
    _min?: Prisma.ProfesseurMatiereMinOrderByAggregateInput;
};
export type ProfesseurMatiereScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProfesseurMatiereScalarWhereWithAggregatesInput | Prisma.ProfesseurMatiereScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProfesseurMatiereScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProfesseurMatiereScalarWhereWithAggregatesInput | Prisma.ProfesseurMatiereScalarWhereWithAggregatesInput[];
    professeurId?: Prisma.StringWithAggregatesFilter<"ProfesseurMatiere"> | string;
    matiereId?: Prisma.StringWithAggregatesFilter<"ProfesseurMatiere"> | string;
};
export type ProfesseurMatiereCreateInput = {
    professeur: Prisma.ProfesseurCreateNestedOneWithoutMatieresInput;
    matiere: Prisma.MatiereCreateNestedOneWithoutProfesseursInput;
};
export type ProfesseurMatiereUncheckedCreateInput = {
    professeurId: string;
    matiereId: string;
};
export type ProfesseurMatiereUpdateInput = {
    professeur?: Prisma.ProfesseurUpdateOneRequiredWithoutMatieresNestedInput;
    matiere?: Prisma.MatiereUpdateOneRequiredWithoutProfesseursNestedInput;
};
export type ProfesseurMatiereUncheckedUpdateInput = {
    professeurId?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProfesseurMatiereCreateManyInput = {
    professeurId: string;
    matiereId: string;
};
export type ProfesseurMatiereUpdateManyMutationInput = {};
export type ProfesseurMatiereUncheckedUpdateManyInput = {
    professeurId?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProfesseurMatiereListRelationFilter = {
    every?: Prisma.ProfesseurMatiereWhereInput;
    some?: Prisma.ProfesseurMatiereWhereInput;
    none?: Prisma.ProfesseurMatiereWhereInput;
};
export type ProfesseurMatiereOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProfesseurMatiereProfesseurIdMatiereIdCompoundUniqueInput = {
    professeurId: string;
    matiereId: string;
};
export type ProfesseurMatiereCountOrderByAggregateInput = {
    professeurId?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
};
export type ProfesseurMatiereMaxOrderByAggregateInput = {
    professeurId?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
};
export type ProfesseurMatiereMinOrderByAggregateInput = {
    professeurId?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
};
export type ProfesseurMatiereCreateNestedManyWithoutProfesseurInput = {
    create?: Prisma.XOR<Prisma.ProfesseurMatiereCreateWithoutProfesseurInput, Prisma.ProfesseurMatiereUncheckedCreateWithoutProfesseurInput> | Prisma.ProfesseurMatiereCreateWithoutProfesseurInput[] | Prisma.ProfesseurMatiereUncheckedCreateWithoutProfesseurInput[];
    connectOrCreate?: Prisma.ProfesseurMatiereCreateOrConnectWithoutProfesseurInput | Prisma.ProfesseurMatiereCreateOrConnectWithoutProfesseurInput[];
    createMany?: Prisma.ProfesseurMatiereCreateManyProfesseurInputEnvelope;
    connect?: Prisma.ProfesseurMatiereWhereUniqueInput | Prisma.ProfesseurMatiereWhereUniqueInput[];
};
export type ProfesseurMatiereUncheckedCreateNestedManyWithoutProfesseurInput = {
    create?: Prisma.XOR<Prisma.ProfesseurMatiereCreateWithoutProfesseurInput, Prisma.ProfesseurMatiereUncheckedCreateWithoutProfesseurInput> | Prisma.ProfesseurMatiereCreateWithoutProfesseurInput[] | Prisma.ProfesseurMatiereUncheckedCreateWithoutProfesseurInput[];
    connectOrCreate?: Prisma.ProfesseurMatiereCreateOrConnectWithoutProfesseurInput | Prisma.ProfesseurMatiereCreateOrConnectWithoutProfesseurInput[];
    createMany?: Prisma.ProfesseurMatiereCreateManyProfesseurInputEnvelope;
    connect?: Prisma.ProfesseurMatiereWhereUniqueInput | Prisma.ProfesseurMatiereWhereUniqueInput[];
};
export type ProfesseurMatiereUpdateManyWithoutProfesseurNestedInput = {
    create?: Prisma.XOR<Prisma.ProfesseurMatiereCreateWithoutProfesseurInput, Prisma.ProfesseurMatiereUncheckedCreateWithoutProfesseurInput> | Prisma.ProfesseurMatiereCreateWithoutProfesseurInput[] | Prisma.ProfesseurMatiereUncheckedCreateWithoutProfesseurInput[];
    connectOrCreate?: Prisma.ProfesseurMatiereCreateOrConnectWithoutProfesseurInput | Prisma.ProfesseurMatiereCreateOrConnectWithoutProfesseurInput[];
    upsert?: Prisma.ProfesseurMatiereUpsertWithWhereUniqueWithoutProfesseurInput | Prisma.ProfesseurMatiereUpsertWithWhereUniqueWithoutProfesseurInput[];
    createMany?: Prisma.ProfesseurMatiereCreateManyProfesseurInputEnvelope;
    set?: Prisma.ProfesseurMatiereWhereUniqueInput | Prisma.ProfesseurMatiereWhereUniqueInput[];
    disconnect?: Prisma.ProfesseurMatiereWhereUniqueInput | Prisma.ProfesseurMatiereWhereUniqueInput[];
    delete?: Prisma.ProfesseurMatiereWhereUniqueInput | Prisma.ProfesseurMatiereWhereUniqueInput[];
    connect?: Prisma.ProfesseurMatiereWhereUniqueInput | Prisma.ProfesseurMatiereWhereUniqueInput[];
    update?: Prisma.ProfesseurMatiereUpdateWithWhereUniqueWithoutProfesseurInput | Prisma.ProfesseurMatiereUpdateWithWhereUniqueWithoutProfesseurInput[];
    updateMany?: Prisma.ProfesseurMatiereUpdateManyWithWhereWithoutProfesseurInput | Prisma.ProfesseurMatiereUpdateManyWithWhereWithoutProfesseurInput[];
    deleteMany?: Prisma.ProfesseurMatiereScalarWhereInput | Prisma.ProfesseurMatiereScalarWhereInput[];
};
export type ProfesseurMatiereUncheckedUpdateManyWithoutProfesseurNestedInput = {
    create?: Prisma.XOR<Prisma.ProfesseurMatiereCreateWithoutProfesseurInput, Prisma.ProfesseurMatiereUncheckedCreateWithoutProfesseurInput> | Prisma.ProfesseurMatiereCreateWithoutProfesseurInput[] | Prisma.ProfesseurMatiereUncheckedCreateWithoutProfesseurInput[];
    connectOrCreate?: Prisma.ProfesseurMatiereCreateOrConnectWithoutProfesseurInput | Prisma.ProfesseurMatiereCreateOrConnectWithoutProfesseurInput[];
    upsert?: Prisma.ProfesseurMatiereUpsertWithWhereUniqueWithoutProfesseurInput | Prisma.ProfesseurMatiereUpsertWithWhereUniqueWithoutProfesseurInput[];
    createMany?: Prisma.ProfesseurMatiereCreateManyProfesseurInputEnvelope;
    set?: Prisma.ProfesseurMatiereWhereUniqueInput | Prisma.ProfesseurMatiereWhereUniqueInput[];
    disconnect?: Prisma.ProfesseurMatiereWhereUniqueInput | Prisma.ProfesseurMatiereWhereUniqueInput[];
    delete?: Prisma.ProfesseurMatiereWhereUniqueInput | Prisma.ProfesseurMatiereWhereUniqueInput[];
    connect?: Prisma.ProfesseurMatiereWhereUniqueInput | Prisma.ProfesseurMatiereWhereUniqueInput[];
    update?: Prisma.ProfesseurMatiereUpdateWithWhereUniqueWithoutProfesseurInput | Prisma.ProfesseurMatiereUpdateWithWhereUniqueWithoutProfesseurInput[];
    updateMany?: Prisma.ProfesseurMatiereUpdateManyWithWhereWithoutProfesseurInput | Prisma.ProfesseurMatiereUpdateManyWithWhereWithoutProfesseurInput[];
    deleteMany?: Prisma.ProfesseurMatiereScalarWhereInput | Prisma.ProfesseurMatiereScalarWhereInput[];
};
export type ProfesseurMatiereCreateNestedManyWithoutMatiereInput = {
    create?: Prisma.XOR<Prisma.ProfesseurMatiereCreateWithoutMatiereInput, Prisma.ProfesseurMatiereUncheckedCreateWithoutMatiereInput> | Prisma.ProfesseurMatiereCreateWithoutMatiereInput[] | Prisma.ProfesseurMatiereUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.ProfesseurMatiereCreateOrConnectWithoutMatiereInput | Prisma.ProfesseurMatiereCreateOrConnectWithoutMatiereInput[];
    createMany?: Prisma.ProfesseurMatiereCreateManyMatiereInputEnvelope;
    connect?: Prisma.ProfesseurMatiereWhereUniqueInput | Prisma.ProfesseurMatiereWhereUniqueInput[];
};
export type ProfesseurMatiereUncheckedCreateNestedManyWithoutMatiereInput = {
    create?: Prisma.XOR<Prisma.ProfesseurMatiereCreateWithoutMatiereInput, Prisma.ProfesseurMatiereUncheckedCreateWithoutMatiereInput> | Prisma.ProfesseurMatiereCreateWithoutMatiereInput[] | Prisma.ProfesseurMatiereUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.ProfesseurMatiereCreateOrConnectWithoutMatiereInput | Prisma.ProfesseurMatiereCreateOrConnectWithoutMatiereInput[];
    createMany?: Prisma.ProfesseurMatiereCreateManyMatiereInputEnvelope;
    connect?: Prisma.ProfesseurMatiereWhereUniqueInput | Prisma.ProfesseurMatiereWhereUniqueInput[];
};
export type ProfesseurMatiereUpdateManyWithoutMatiereNestedInput = {
    create?: Prisma.XOR<Prisma.ProfesseurMatiereCreateWithoutMatiereInput, Prisma.ProfesseurMatiereUncheckedCreateWithoutMatiereInput> | Prisma.ProfesseurMatiereCreateWithoutMatiereInput[] | Prisma.ProfesseurMatiereUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.ProfesseurMatiereCreateOrConnectWithoutMatiereInput | Prisma.ProfesseurMatiereCreateOrConnectWithoutMatiereInput[];
    upsert?: Prisma.ProfesseurMatiereUpsertWithWhereUniqueWithoutMatiereInput | Prisma.ProfesseurMatiereUpsertWithWhereUniqueWithoutMatiereInput[];
    createMany?: Prisma.ProfesseurMatiereCreateManyMatiereInputEnvelope;
    set?: Prisma.ProfesseurMatiereWhereUniqueInput | Prisma.ProfesseurMatiereWhereUniqueInput[];
    disconnect?: Prisma.ProfesseurMatiereWhereUniqueInput | Prisma.ProfesseurMatiereWhereUniqueInput[];
    delete?: Prisma.ProfesseurMatiereWhereUniqueInput | Prisma.ProfesseurMatiereWhereUniqueInput[];
    connect?: Prisma.ProfesseurMatiereWhereUniqueInput | Prisma.ProfesseurMatiereWhereUniqueInput[];
    update?: Prisma.ProfesseurMatiereUpdateWithWhereUniqueWithoutMatiereInput | Prisma.ProfesseurMatiereUpdateWithWhereUniqueWithoutMatiereInput[];
    updateMany?: Prisma.ProfesseurMatiereUpdateManyWithWhereWithoutMatiereInput | Prisma.ProfesseurMatiereUpdateManyWithWhereWithoutMatiereInput[];
    deleteMany?: Prisma.ProfesseurMatiereScalarWhereInput | Prisma.ProfesseurMatiereScalarWhereInput[];
};
export type ProfesseurMatiereUncheckedUpdateManyWithoutMatiereNestedInput = {
    create?: Prisma.XOR<Prisma.ProfesseurMatiereCreateWithoutMatiereInput, Prisma.ProfesseurMatiereUncheckedCreateWithoutMatiereInput> | Prisma.ProfesseurMatiereCreateWithoutMatiereInput[] | Prisma.ProfesseurMatiereUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.ProfesseurMatiereCreateOrConnectWithoutMatiereInput | Prisma.ProfesseurMatiereCreateOrConnectWithoutMatiereInput[];
    upsert?: Prisma.ProfesseurMatiereUpsertWithWhereUniqueWithoutMatiereInput | Prisma.ProfesseurMatiereUpsertWithWhereUniqueWithoutMatiereInput[];
    createMany?: Prisma.ProfesseurMatiereCreateManyMatiereInputEnvelope;
    set?: Prisma.ProfesseurMatiereWhereUniqueInput | Prisma.ProfesseurMatiereWhereUniqueInput[];
    disconnect?: Prisma.ProfesseurMatiereWhereUniqueInput | Prisma.ProfesseurMatiereWhereUniqueInput[];
    delete?: Prisma.ProfesseurMatiereWhereUniqueInput | Prisma.ProfesseurMatiereWhereUniqueInput[];
    connect?: Prisma.ProfesseurMatiereWhereUniqueInput | Prisma.ProfesseurMatiereWhereUniqueInput[];
    update?: Prisma.ProfesseurMatiereUpdateWithWhereUniqueWithoutMatiereInput | Prisma.ProfesseurMatiereUpdateWithWhereUniqueWithoutMatiereInput[];
    updateMany?: Prisma.ProfesseurMatiereUpdateManyWithWhereWithoutMatiereInput | Prisma.ProfesseurMatiereUpdateManyWithWhereWithoutMatiereInput[];
    deleteMany?: Prisma.ProfesseurMatiereScalarWhereInput | Prisma.ProfesseurMatiereScalarWhereInput[];
};
export type ProfesseurMatiereCreateWithoutProfesseurInput = {
    matiere: Prisma.MatiereCreateNestedOneWithoutProfesseursInput;
};
export type ProfesseurMatiereUncheckedCreateWithoutProfesseurInput = {
    matiereId: string;
};
export type ProfesseurMatiereCreateOrConnectWithoutProfesseurInput = {
    where: Prisma.ProfesseurMatiereWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfesseurMatiereCreateWithoutProfesseurInput, Prisma.ProfesseurMatiereUncheckedCreateWithoutProfesseurInput>;
};
export type ProfesseurMatiereCreateManyProfesseurInputEnvelope = {
    data: Prisma.ProfesseurMatiereCreateManyProfesseurInput | Prisma.ProfesseurMatiereCreateManyProfesseurInput[];
};
export type ProfesseurMatiereUpsertWithWhereUniqueWithoutProfesseurInput = {
    where: Prisma.ProfesseurMatiereWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProfesseurMatiereUpdateWithoutProfesseurInput, Prisma.ProfesseurMatiereUncheckedUpdateWithoutProfesseurInput>;
    create: Prisma.XOR<Prisma.ProfesseurMatiereCreateWithoutProfesseurInput, Prisma.ProfesseurMatiereUncheckedCreateWithoutProfesseurInput>;
};
export type ProfesseurMatiereUpdateWithWhereUniqueWithoutProfesseurInput = {
    where: Prisma.ProfesseurMatiereWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProfesseurMatiereUpdateWithoutProfesseurInput, Prisma.ProfesseurMatiereUncheckedUpdateWithoutProfesseurInput>;
};
export type ProfesseurMatiereUpdateManyWithWhereWithoutProfesseurInput = {
    where: Prisma.ProfesseurMatiereScalarWhereInput;
    data: Prisma.XOR<Prisma.ProfesseurMatiereUpdateManyMutationInput, Prisma.ProfesseurMatiereUncheckedUpdateManyWithoutProfesseurInput>;
};
export type ProfesseurMatiereScalarWhereInput = {
    AND?: Prisma.ProfesseurMatiereScalarWhereInput | Prisma.ProfesseurMatiereScalarWhereInput[];
    OR?: Prisma.ProfesseurMatiereScalarWhereInput[];
    NOT?: Prisma.ProfesseurMatiereScalarWhereInput | Prisma.ProfesseurMatiereScalarWhereInput[];
    professeurId?: Prisma.StringFilter<"ProfesseurMatiere"> | string;
    matiereId?: Prisma.StringFilter<"ProfesseurMatiere"> | string;
};
export type ProfesseurMatiereCreateWithoutMatiereInput = {
    professeur: Prisma.ProfesseurCreateNestedOneWithoutMatieresInput;
};
export type ProfesseurMatiereUncheckedCreateWithoutMatiereInput = {
    professeurId: string;
};
export type ProfesseurMatiereCreateOrConnectWithoutMatiereInput = {
    where: Prisma.ProfesseurMatiereWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfesseurMatiereCreateWithoutMatiereInput, Prisma.ProfesseurMatiereUncheckedCreateWithoutMatiereInput>;
};
export type ProfesseurMatiereCreateManyMatiereInputEnvelope = {
    data: Prisma.ProfesseurMatiereCreateManyMatiereInput | Prisma.ProfesseurMatiereCreateManyMatiereInput[];
};
export type ProfesseurMatiereUpsertWithWhereUniqueWithoutMatiereInput = {
    where: Prisma.ProfesseurMatiereWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProfesseurMatiereUpdateWithoutMatiereInput, Prisma.ProfesseurMatiereUncheckedUpdateWithoutMatiereInput>;
    create: Prisma.XOR<Prisma.ProfesseurMatiereCreateWithoutMatiereInput, Prisma.ProfesseurMatiereUncheckedCreateWithoutMatiereInput>;
};
export type ProfesseurMatiereUpdateWithWhereUniqueWithoutMatiereInput = {
    where: Prisma.ProfesseurMatiereWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProfesseurMatiereUpdateWithoutMatiereInput, Prisma.ProfesseurMatiereUncheckedUpdateWithoutMatiereInput>;
};
export type ProfesseurMatiereUpdateManyWithWhereWithoutMatiereInput = {
    where: Prisma.ProfesseurMatiereScalarWhereInput;
    data: Prisma.XOR<Prisma.ProfesseurMatiereUpdateManyMutationInput, Prisma.ProfesseurMatiereUncheckedUpdateManyWithoutMatiereInput>;
};
export type ProfesseurMatiereCreateManyProfesseurInput = {
    matiereId: string;
};
export type ProfesseurMatiereUpdateWithoutProfesseurInput = {
    matiere?: Prisma.MatiereUpdateOneRequiredWithoutProfesseursNestedInput;
};
export type ProfesseurMatiereUncheckedUpdateWithoutProfesseurInput = {
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProfesseurMatiereUncheckedUpdateManyWithoutProfesseurInput = {
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProfesseurMatiereCreateManyMatiereInput = {
    professeurId: string;
};
export type ProfesseurMatiereUpdateWithoutMatiereInput = {
    professeur?: Prisma.ProfesseurUpdateOneRequiredWithoutMatieresNestedInput;
};
export type ProfesseurMatiereUncheckedUpdateWithoutMatiereInput = {
    professeurId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProfesseurMatiereUncheckedUpdateManyWithoutMatiereInput = {
    professeurId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProfesseurMatiereSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    professeurId?: boolean;
    matiereId?: boolean;
    professeur?: boolean | Prisma.ProfesseurDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.MatiereDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["professeurMatiere"]>;
export type ProfesseurMatiereSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    professeurId?: boolean;
    matiereId?: boolean;
    professeur?: boolean | Prisma.ProfesseurDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.MatiereDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["professeurMatiere"]>;
export type ProfesseurMatiereSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    professeurId?: boolean;
    matiereId?: boolean;
    professeur?: boolean | Prisma.ProfesseurDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.MatiereDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["professeurMatiere"]>;
export type ProfesseurMatiereSelectScalar = {
    professeurId?: boolean;
    matiereId?: boolean;
};
export type ProfesseurMatiereOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"professeurId" | "matiereId", ExtArgs["result"]["professeurMatiere"]>;
export type ProfesseurMatiereInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    professeur?: boolean | Prisma.ProfesseurDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.MatiereDefaultArgs<ExtArgs>;
};
export type ProfesseurMatiereIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    professeur?: boolean | Prisma.ProfesseurDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.MatiereDefaultArgs<ExtArgs>;
};
export type ProfesseurMatiereIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    professeur?: boolean | Prisma.ProfesseurDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.MatiereDefaultArgs<ExtArgs>;
};
export type $ProfesseurMatierePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProfesseurMatiere";
    objects: {
        professeur: Prisma.$ProfesseurPayload<ExtArgs>;
        matiere: Prisma.$MatierePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        professeurId: string;
        matiereId: string;
    }, ExtArgs["result"]["professeurMatiere"]>;
    composites: {};
};
export type ProfesseurMatiereGetPayload<S extends boolean | null | undefined | ProfesseurMatiereDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProfesseurMatierePayload, S>;
export type ProfesseurMatiereCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProfesseurMatiereFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProfesseurMatiereCountAggregateInputType | true;
};
export interface ProfesseurMatiereDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProfesseurMatiere'];
        meta: {
            name: 'ProfesseurMatiere';
        };
    };
    findUnique<T extends ProfesseurMatiereFindUniqueArgs>(args: Prisma.SelectSubset<T, ProfesseurMatiereFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProfesseurMatiereClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurMatierePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProfesseurMatiereFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProfesseurMatiereFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfesseurMatiereClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurMatierePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProfesseurMatiereFindFirstArgs>(args?: Prisma.SelectSubset<T, ProfesseurMatiereFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProfesseurMatiereClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurMatierePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProfesseurMatiereFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProfesseurMatiereFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfesseurMatiereClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurMatierePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProfesseurMatiereFindManyArgs>(args?: Prisma.SelectSubset<T, ProfesseurMatiereFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfesseurMatierePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProfesseurMatiereCreateArgs>(args: Prisma.SelectSubset<T, ProfesseurMatiereCreateArgs<ExtArgs>>): Prisma.Prisma__ProfesseurMatiereClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurMatierePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProfesseurMatiereCreateManyArgs>(args?: Prisma.SelectSubset<T, ProfesseurMatiereCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProfesseurMatiereCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProfesseurMatiereCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfesseurMatierePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProfesseurMatiereDeleteArgs>(args: Prisma.SelectSubset<T, ProfesseurMatiereDeleteArgs<ExtArgs>>): Prisma.Prisma__ProfesseurMatiereClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurMatierePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProfesseurMatiereUpdateArgs>(args: Prisma.SelectSubset<T, ProfesseurMatiereUpdateArgs<ExtArgs>>): Prisma.Prisma__ProfesseurMatiereClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurMatierePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProfesseurMatiereDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProfesseurMatiereDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProfesseurMatiereUpdateManyArgs>(args: Prisma.SelectSubset<T, ProfesseurMatiereUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProfesseurMatiereUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProfesseurMatiereUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfesseurMatierePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProfesseurMatiereUpsertArgs>(args: Prisma.SelectSubset<T, ProfesseurMatiereUpsertArgs<ExtArgs>>): Prisma.Prisma__ProfesseurMatiereClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurMatierePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProfesseurMatiereCountArgs>(args?: Prisma.Subset<T, ProfesseurMatiereCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProfesseurMatiereCountAggregateOutputType> : number>;
    aggregate<T extends ProfesseurMatiereAggregateArgs>(args: Prisma.Subset<T, ProfesseurMatiereAggregateArgs>): Prisma.PrismaPromise<GetProfesseurMatiereAggregateType<T>>;
    groupBy<T extends ProfesseurMatiereGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProfesseurMatiereGroupByArgs['orderBy'];
    } : {
        orderBy?: ProfesseurMatiereGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProfesseurMatiereGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfesseurMatiereGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProfesseurMatiereFieldRefs;
}
export interface Prisma__ProfesseurMatiereClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    professeur<T extends Prisma.ProfesseurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfesseurDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfesseurClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    matiere<T extends Prisma.MatiereDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MatiereDefaultArgs<ExtArgs>>): Prisma.Prisma__MatiereClient<runtime.Types.Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProfesseurMatiereFieldRefs {
    readonly professeurId: Prisma.FieldRef<"ProfesseurMatiere", 'String'>;
    readonly matiereId: Prisma.FieldRef<"ProfesseurMatiere", 'String'>;
}
export type ProfesseurMatiereFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurMatiereSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurMatiereOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurMatiereInclude<ExtArgs> | null;
    where: Prisma.ProfesseurMatiereWhereUniqueInput;
};
export type ProfesseurMatiereFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurMatiereSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurMatiereOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurMatiereInclude<ExtArgs> | null;
    where: Prisma.ProfesseurMatiereWhereUniqueInput;
};
export type ProfesseurMatiereFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurMatiereSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurMatiereOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurMatiereInclude<ExtArgs> | null;
    where?: Prisma.ProfesseurMatiereWhereInput;
    orderBy?: Prisma.ProfesseurMatiereOrderByWithRelationInput | Prisma.ProfesseurMatiereOrderByWithRelationInput[];
    cursor?: Prisma.ProfesseurMatiereWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfesseurMatiereScalarFieldEnum | Prisma.ProfesseurMatiereScalarFieldEnum[];
};
export type ProfesseurMatiereFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurMatiereSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurMatiereOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurMatiereInclude<ExtArgs> | null;
    where?: Prisma.ProfesseurMatiereWhereInput;
    orderBy?: Prisma.ProfesseurMatiereOrderByWithRelationInput | Prisma.ProfesseurMatiereOrderByWithRelationInput[];
    cursor?: Prisma.ProfesseurMatiereWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfesseurMatiereScalarFieldEnum | Prisma.ProfesseurMatiereScalarFieldEnum[];
};
export type ProfesseurMatiereFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurMatiereSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurMatiereOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurMatiereInclude<ExtArgs> | null;
    where?: Prisma.ProfesseurMatiereWhereInput;
    orderBy?: Prisma.ProfesseurMatiereOrderByWithRelationInput | Prisma.ProfesseurMatiereOrderByWithRelationInput[];
    cursor?: Prisma.ProfesseurMatiereWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfesseurMatiereScalarFieldEnum | Prisma.ProfesseurMatiereScalarFieldEnum[];
};
export type ProfesseurMatiereCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurMatiereSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurMatiereOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurMatiereInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfesseurMatiereCreateInput, Prisma.ProfesseurMatiereUncheckedCreateInput>;
};
export type ProfesseurMatiereCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProfesseurMatiereCreateManyInput | Prisma.ProfesseurMatiereCreateManyInput[];
};
export type ProfesseurMatiereCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurMatiereSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProfesseurMatiereOmit<ExtArgs> | null;
    data: Prisma.ProfesseurMatiereCreateManyInput | Prisma.ProfesseurMatiereCreateManyInput[];
    include?: Prisma.ProfesseurMatiereIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProfesseurMatiereUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurMatiereSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurMatiereOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurMatiereInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfesseurMatiereUpdateInput, Prisma.ProfesseurMatiereUncheckedUpdateInput>;
    where: Prisma.ProfesseurMatiereWhereUniqueInput;
};
export type ProfesseurMatiereUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProfesseurMatiereUpdateManyMutationInput, Prisma.ProfesseurMatiereUncheckedUpdateManyInput>;
    where?: Prisma.ProfesseurMatiereWhereInput;
    limit?: number;
};
export type ProfesseurMatiereUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurMatiereSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProfesseurMatiereOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfesseurMatiereUpdateManyMutationInput, Prisma.ProfesseurMatiereUncheckedUpdateManyInput>;
    where?: Prisma.ProfesseurMatiereWhereInput;
    limit?: number;
    include?: Prisma.ProfesseurMatiereIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProfesseurMatiereUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurMatiereSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurMatiereOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurMatiereInclude<ExtArgs> | null;
    where: Prisma.ProfesseurMatiereWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfesseurMatiereCreateInput, Prisma.ProfesseurMatiereUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProfesseurMatiereUpdateInput, Prisma.ProfesseurMatiereUncheckedUpdateInput>;
};
export type ProfesseurMatiereDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurMatiereSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurMatiereOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurMatiereInclude<ExtArgs> | null;
    where: Prisma.ProfesseurMatiereWhereUniqueInput;
};
export type ProfesseurMatiereDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfesseurMatiereWhereInput;
    limit?: number;
};
export type ProfesseurMatiereDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurMatiereSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurMatiereOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurMatiereInclude<ExtArgs> | null;
};

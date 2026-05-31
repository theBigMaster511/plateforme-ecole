import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type NoteModel = runtime.Types.Result.DefaultSelection<Prisma.$NotePayload>;
export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null;
    _avg: NoteAvgAggregateOutputType | null;
    _sum: NoteSumAggregateOutputType | null;
    _min: NoteMinAggregateOutputType | null;
    _max: NoteMaxAggregateOutputType | null;
};
export type NoteAvgAggregateOutputType = {
    valeur: number | null;
};
export type NoteSumAggregateOutputType = {
    valeur: number | null;
};
export type NoteMinAggregateOutputType = {
    id: string | null;
    valeur: number | null;
    appreciation: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    eleveId: string | null;
    evaluationId: string | null;
};
export type NoteMaxAggregateOutputType = {
    id: string | null;
    valeur: number | null;
    appreciation: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    eleveId: string | null;
    evaluationId: string | null;
};
export type NoteCountAggregateOutputType = {
    id: number;
    valeur: number;
    appreciation: number;
    createdAt: number;
    updatedAt: number;
    eleveId: number;
    evaluationId: number;
    _all: number;
};
export type NoteAvgAggregateInputType = {
    valeur?: true;
};
export type NoteSumAggregateInputType = {
    valeur?: true;
};
export type NoteMinAggregateInputType = {
    id?: true;
    valeur?: true;
    appreciation?: true;
    createdAt?: true;
    updatedAt?: true;
    eleveId?: true;
    evaluationId?: true;
};
export type NoteMaxAggregateInputType = {
    id?: true;
    valeur?: true;
    appreciation?: true;
    createdAt?: true;
    updatedAt?: true;
    eleveId?: true;
    evaluationId?: true;
};
export type NoteCountAggregateInputType = {
    id?: true;
    valeur?: true;
    appreciation?: true;
    createdAt?: true;
    updatedAt?: true;
    eleveId?: true;
    evaluationId?: true;
    _all?: true;
};
export type NoteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NoteWhereInput;
    orderBy?: Prisma.NoteOrderByWithRelationInput | Prisma.NoteOrderByWithRelationInput[];
    cursor?: Prisma.NoteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NoteCountAggregateInputType;
    _avg?: NoteAvgAggregateInputType;
    _sum?: NoteSumAggregateInputType;
    _min?: NoteMinAggregateInputType;
    _max?: NoteMaxAggregateInputType;
};
export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
    [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNote[P]> : Prisma.GetScalarType<T[P], AggregateNote[P]>;
};
export type NoteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NoteWhereInput;
    orderBy?: Prisma.NoteOrderByWithAggregationInput | Prisma.NoteOrderByWithAggregationInput[];
    by: Prisma.NoteScalarFieldEnum[] | Prisma.NoteScalarFieldEnum;
    having?: Prisma.NoteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NoteCountAggregateInputType | true;
    _avg?: NoteAvgAggregateInputType;
    _sum?: NoteSumAggregateInputType;
    _min?: NoteMinAggregateInputType;
    _max?: NoteMaxAggregateInputType;
};
export type NoteGroupByOutputType = {
    id: string;
    valeur: number;
    appreciation: string | null;
    createdAt: Date;
    updatedAt: Date;
    eleveId: string;
    evaluationId: string;
    _count: NoteCountAggregateOutputType | null;
    _avg: NoteAvgAggregateOutputType | null;
    _sum: NoteSumAggregateOutputType | null;
    _min: NoteMinAggregateOutputType | null;
    _max: NoteMaxAggregateOutputType | null;
};
export type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NoteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NoteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NoteGroupByOutputType[P]>;
}>>;
export type NoteWhereInput = {
    AND?: Prisma.NoteWhereInput | Prisma.NoteWhereInput[];
    OR?: Prisma.NoteWhereInput[];
    NOT?: Prisma.NoteWhereInput | Prisma.NoteWhereInput[];
    id?: Prisma.StringFilter<"Note"> | string;
    valeur?: Prisma.FloatFilter<"Note"> | number;
    appreciation?: Prisma.StringNullableFilter<"Note"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Note"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Note"> | Date | string;
    eleveId?: Prisma.StringFilter<"Note"> | string;
    evaluationId?: Prisma.StringFilter<"Note"> | string;
    eleve?: Prisma.XOR<Prisma.EleveScalarRelationFilter, Prisma.EleveWhereInput>;
    evaluation?: Prisma.XOR<Prisma.EvaluationScalarRelationFilter, Prisma.EvaluationWhereInput>;
};
export type NoteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    valeur?: Prisma.SortOrder;
    appreciation?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    eleveId?: Prisma.SortOrder;
    evaluationId?: Prisma.SortOrder;
    eleve?: Prisma.EleveOrderByWithRelationInput;
    evaluation?: Prisma.EvaluationOrderByWithRelationInput;
};
export type NoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    eleveId_evaluationId?: Prisma.NoteEleveIdEvaluationIdCompoundUniqueInput;
    AND?: Prisma.NoteWhereInput | Prisma.NoteWhereInput[];
    OR?: Prisma.NoteWhereInput[];
    NOT?: Prisma.NoteWhereInput | Prisma.NoteWhereInput[];
    valeur?: Prisma.FloatFilter<"Note"> | number;
    appreciation?: Prisma.StringNullableFilter<"Note"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Note"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Note"> | Date | string;
    eleveId?: Prisma.StringFilter<"Note"> | string;
    evaluationId?: Prisma.StringFilter<"Note"> | string;
    eleve?: Prisma.XOR<Prisma.EleveScalarRelationFilter, Prisma.EleveWhereInput>;
    evaluation?: Prisma.XOR<Prisma.EvaluationScalarRelationFilter, Prisma.EvaluationWhereInput>;
}, "id" | "eleveId_evaluationId">;
export type NoteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    valeur?: Prisma.SortOrder;
    appreciation?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    eleveId?: Prisma.SortOrder;
    evaluationId?: Prisma.SortOrder;
    _count?: Prisma.NoteCountOrderByAggregateInput;
    _avg?: Prisma.NoteAvgOrderByAggregateInput;
    _max?: Prisma.NoteMaxOrderByAggregateInput;
    _min?: Prisma.NoteMinOrderByAggregateInput;
    _sum?: Prisma.NoteSumOrderByAggregateInput;
};
export type NoteScalarWhereWithAggregatesInput = {
    AND?: Prisma.NoteScalarWhereWithAggregatesInput | Prisma.NoteScalarWhereWithAggregatesInput[];
    OR?: Prisma.NoteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NoteScalarWhereWithAggregatesInput | Prisma.NoteScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Note"> | string;
    valeur?: Prisma.FloatWithAggregatesFilter<"Note"> | number;
    appreciation?: Prisma.StringNullableWithAggregatesFilter<"Note"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Note"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Note"> | Date | string;
    eleveId?: Prisma.StringWithAggregatesFilter<"Note"> | string;
    evaluationId?: Prisma.StringWithAggregatesFilter<"Note"> | string;
};
export type NoteCreateInput = {
    id?: string;
    valeur: number;
    appreciation?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    eleve: Prisma.EleveCreateNestedOneWithoutNotesInput;
    evaluation: Prisma.EvaluationCreateNestedOneWithoutNotesInput;
};
export type NoteUncheckedCreateInput = {
    id?: string;
    valeur: number;
    appreciation?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    eleveId: string;
    evaluationId: string;
};
export type NoteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.FloatFieldUpdateOperationsInput | number;
    appreciation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eleve?: Prisma.EleveUpdateOneRequiredWithoutNotesNestedInput;
    evaluation?: Prisma.EvaluationUpdateOneRequiredWithoutNotesNestedInput;
};
export type NoteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.FloatFieldUpdateOperationsInput | number;
    appreciation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eleveId?: Prisma.StringFieldUpdateOperationsInput | string;
    evaluationId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NoteCreateManyInput = {
    id?: string;
    valeur: number;
    appreciation?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    eleveId: string;
    evaluationId: string;
};
export type NoteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.FloatFieldUpdateOperationsInput | number;
    appreciation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NoteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.FloatFieldUpdateOperationsInput | number;
    appreciation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eleveId?: Prisma.StringFieldUpdateOperationsInput | string;
    evaluationId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NoteListRelationFilter = {
    every?: Prisma.NoteWhereInput;
    some?: Prisma.NoteWhereInput;
    none?: Prisma.NoteWhereInput;
};
export type NoteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NoteEleveIdEvaluationIdCompoundUniqueInput = {
    eleveId: string;
    evaluationId: string;
};
export type NoteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    valeur?: Prisma.SortOrder;
    appreciation?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    eleveId?: Prisma.SortOrder;
    evaluationId?: Prisma.SortOrder;
};
export type NoteAvgOrderByAggregateInput = {
    valeur?: Prisma.SortOrder;
};
export type NoteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    valeur?: Prisma.SortOrder;
    appreciation?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    eleveId?: Prisma.SortOrder;
    evaluationId?: Prisma.SortOrder;
};
export type NoteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    valeur?: Prisma.SortOrder;
    appreciation?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    eleveId?: Prisma.SortOrder;
    evaluationId?: Prisma.SortOrder;
};
export type NoteSumOrderByAggregateInput = {
    valeur?: Prisma.SortOrder;
};
export type NoteCreateNestedManyWithoutEleveInput = {
    create?: Prisma.XOR<Prisma.NoteCreateWithoutEleveInput, Prisma.NoteUncheckedCreateWithoutEleveInput> | Prisma.NoteCreateWithoutEleveInput[] | Prisma.NoteUncheckedCreateWithoutEleveInput[];
    connectOrCreate?: Prisma.NoteCreateOrConnectWithoutEleveInput | Prisma.NoteCreateOrConnectWithoutEleveInput[];
    createMany?: Prisma.NoteCreateManyEleveInputEnvelope;
    connect?: Prisma.NoteWhereUniqueInput | Prisma.NoteWhereUniqueInput[];
};
export type NoteUncheckedCreateNestedManyWithoutEleveInput = {
    create?: Prisma.XOR<Prisma.NoteCreateWithoutEleveInput, Prisma.NoteUncheckedCreateWithoutEleveInput> | Prisma.NoteCreateWithoutEleveInput[] | Prisma.NoteUncheckedCreateWithoutEleveInput[];
    connectOrCreate?: Prisma.NoteCreateOrConnectWithoutEleveInput | Prisma.NoteCreateOrConnectWithoutEleveInput[];
    createMany?: Prisma.NoteCreateManyEleveInputEnvelope;
    connect?: Prisma.NoteWhereUniqueInput | Prisma.NoteWhereUniqueInput[];
};
export type NoteUpdateManyWithoutEleveNestedInput = {
    create?: Prisma.XOR<Prisma.NoteCreateWithoutEleveInput, Prisma.NoteUncheckedCreateWithoutEleveInput> | Prisma.NoteCreateWithoutEleveInput[] | Prisma.NoteUncheckedCreateWithoutEleveInput[];
    connectOrCreate?: Prisma.NoteCreateOrConnectWithoutEleveInput | Prisma.NoteCreateOrConnectWithoutEleveInput[];
    upsert?: Prisma.NoteUpsertWithWhereUniqueWithoutEleveInput | Prisma.NoteUpsertWithWhereUniqueWithoutEleveInput[];
    createMany?: Prisma.NoteCreateManyEleveInputEnvelope;
    set?: Prisma.NoteWhereUniqueInput | Prisma.NoteWhereUniqueInput[];
    disconnect?: Prisma.NoteWhereUniqueInput | Prisma.NoteWhereUniqueInput[];
    delete?: Prisma.NoteWhereUniqueInput | Prisma.NoteWhereUniqueInput[];
    connect?: Prisma.NoteWhereUniqueInput | Prisma.NoteWhereUniqueInput[];
    update?: Prisma.NoteUpdateWithWhereUniqueWithoutEleveInput | Prisma.NoteUpdateWithWhereUniqueWithoutEleveInput[];
    updateMany?: Prisma.NoteUpdateManyWithWhereWithoutEleveInput | Prisma.NoteUpdateManyWithWhereWithoutEleveInput[];
    deleteMany?: Prisma.NoteScalarWhereInput | Prisma.NoteScalarWhereInput[];
};
export type NoteUncheckedUpdateManyWithoutEleveNestedInput = {
    create?: Prisma.XOR<Prisma.NoteCreateWithoutEleveInput, Prisma.NoteUncheckedCreateWithoutEleveInput> | Prisma.NoteCreateWithoutEleveInput[] | Prisma.NoteUncheckedCreateWithoutEleveInput[];
    connectOrCreate?: Prisma.NoteCreateOrConnectWithoutEleveInput | Prisma.NoteCreateOrConnectWithoutEleveInput[];
    upsert?: Prisma.NoteUpsertWithWhereUniqueWithoutEleveInput | Prisma.NoteUpsertWithWhereUniqueWithoutEleveInput[];
    createMany?: Prisma.NoteCreateManyEleveInputEnvelope;
    set?: Prisma.NoteWhereUniqueInput | Prisma.NoteWhereUniqueInput[];
    disconnect?: Prisma.NoteWhereUniqueInput | Prisma.NoteWhereUniqueInput[];
    delete?: Prisma.NoteWhereUniqueInput | Prisma.NoteWhereUniqueInput[];
    connect?: Prisma.NoteWhereUniqueInput | Prisma.NoteWhereUniqueInput[];
    update?: Prisma.NoteUpdateWithWhereUniqueWithoutEleveInput | Prisma.NoteUpdateWithWhereUniqueWithoutEleveInput[];
    updateMany?: Prisma.NoteUpdateManyWithWhereWithoutEleveInput | Prisma.NoteUpdateManyWithWhereWithoutEleveInput[];
    deleteMany?: Prisma.NoteScalarWhereInput | Prisma.NoteScalarWhereInput[];
};
export type NoteCreateNestedManyWithoutEvaluationInput = {
    create?: Prisma.XOR<Prisma.NoteCreateWithoutEvaluationInput, Prisma.NoteUncheckedCreateWithoutEvaluationInput> | Prisma.NoteCreateWithoutEvaluationInput[] | Prisma.NoteUncheckedCreateWithoutEvaluationInput[];
    connectOrCreate?: Prisma.NoteCreateOrConnectWithoutEvaluationInput | Prisma.NoteCreateOrConnectWithoutEvaluationInput[];
    createMany?: Prisma.NoteCreateManyEvaluationInputEnvelope;
    connect?: Prisma.NoteWhereUniqueInput | Prisma.NoteWhereUniqueInput[];
};
export type NoteUncheckedCreateNestedManyWithoutEvaluationInput = {
    create?: Prisma.XOR<Prisma.NoteCreateWithoutEvaluationInput, Prisma.NoteUncheckedCreateWithoutEvaluationInput> | Prisma.NoteCreateWithoutEvaluationInput[] | Prisma.NoteUncheckedCreateWithoutEvaluationInput[];
    connectOrCreate?: Prisma.NoteCreateOrConnectWithoutEvaluationInput | Prisma.NoteCreateOrConnectWithoutEvaluationInput[];
    createMany?: Prisma.NoteCreateManyEvaluationInputEnvelope;
    connect?: Prisma.NoteWhereUniqueInput | Prisma.NoteWhereUniqueInput[];
};
export type NoteUpdateManyWithoutEvaluationNestedInput = {
    create?: Prisma.XOR<Prisma.NoteCreateWithoutEvaluationInput, Prisma.NoteUncheckedCreateWithoutEvaluationInput> | Prisma.NoteCreateWithoutEvaluationInput[] | Prisma.NoteUncheckedCreateWithoutEvaluationInput[];
    connectOrCreate?: Prisma.NoteCreateOrConnectWithoutEvaluationInput | Prisma.NoteCreateOrConnectWithoutEvaluationInput[];
    upsert?: Prisma.NoteUpsertWithWhereUniqueWithoutEvaluationInput | Prisma.NoteUpsertWithWhereUniqueWithoutEvaluationInput[];
    createMany?: Prisma.NoteCreateManyEvaluationInputEnvelope;
    set?: Prisma.NoteWhereUniqueInput | Prisma.NoteWhereUniqueInput[];
    disconnect?: Prisma.NoteWhereUniqueInput | Prisma.NoteWhereUniqueInput[];
    delete?: Prisma.NoteWhereUniqueInput | Prisma.NoteWhereUniqueInput[];
    connect?: Prisma.NoteWhereUniqueInput | Prisma.NoteWhereUniqueInput[];
    update?: Prisma.NoteUpdateWithWhereUniqueWithoutEvaluationInput | Prisma.NoteUpdateWithWhereUniqueWithoutEvaluationInput[];
    updateMany?: Prisma.NoteUpdateManyWithWhereWithoutEvaluationInput | Prisma.NoteUpdateManyWithWhereWithoutEvaluationInput[];
    deleteMany?: Prisma.NoteScalarWhereInput | Prisma.NoteScalarWhereInput[];
};
export type NoteUncheckedUpdateManyWithoutEvaluationNestedInput = {
    create?: Prisma.XOR<Prisma.NoteCreateWithoutEvaluationInput, Prisma.NoteUncheckedCreateWithoutEvaluationInput> | Prisma.NoteCreateWithoutEvaluationInput[] | Prisma.NoteUncheckedCreateWithoutEvaluationInput[];
    connectOrCreate?: Prisma.NoteCreateOrConnectWithoutEvaluationInput | Prisma.NoteCreateOrConnectWithoutEvaluationInput[];
    upsert?: Prisma.NoteUpsertWithWhereUniqueWithoutEvaluationInput | Prisma.NoteUpsertWithWhereUniqueWithoutEvaluationInput[];
    createMany?: Prisma.NoteCreateManyEvaluationInputEnvelope;
    set?: Prisma.NoteWhereUniqueInput | Prisma.NoteWhereUniqueInput[];
    disconnect?: Prisma.NoteWhereUniqueInput | Prisma.NoteWhereUniqueInput[];
    delete?: Prisma.NoteWhereUniqueInput | Prisma.NoteWhereUniqueInput[];
    connect?: Prisma.NoteWhereUniqueInput | Prisma.NoteWhereUniqueInput[];
    update?: Prisma.NoteUpdateWithWhereUniqueWithoutEvaluationInput | Prisma.NoteUpdateWithWhereUniqueWithoutEvaluationInput[];
    updateMany?: Prisma.NoteUpdateManyWithWhereWithoutEvaluationInput | Prisma.NoteUpdateManyWithWhereWithoutEvaluationInput[];
    deleteMany?: Prisma.NoteScalarWhereInput | Prisma.NoteScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NoteCreateWithoutEleveInput = {
    id?: string;
    valeur: number;
    appreciation?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    evaluation: Prisma.EvaluationCreateNestedOneWithoutNotesInput;
};
export type NoteUncheckedCreateWithoutEleveInput = {
    id?: string;
    valeur: number;
    appreciation?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    evaluationId: string;
};
export type NoteCreateOrConnectWithoutEleveInput = {
    where: Prisma.NoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.NoteCreateWithoutEleveInput, Prisma.NoteUncheckedCreateWithoutEleveInput>;
};
export type NoteCreateManyEleveInputEnvelope = {
    data: Prisma.NoteCreateManyEleveInput | Prisma.NoteCreateManyEleveInput[];
};
export type NoteUpsertWithWhereUniqueWithoutEleveInput = {
    where: Prisma.NoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.NoteUpdateWithoutEleveInput, Prisma.NoteUncheckedUpdateWithoutEleveInput>;
    create: Prisma.XOR<Prisma.NoteCreateWithoutEleveInput, Prisma.NoteUncheckedCreateWithoutEleveInput>;
};
export type NoteUpdateWithWhereUniqueWithoutEleveInput = {
    where: Prisma.NoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.NoteUpdateWithoutEleveInput, Prisma.NoteUncheckedUpdateWithoutEleveInput>;
};
export type NoteUpdateManyWithWhereWithoutEleveInput = {
    where: Prisma.NoteScalarWhereInput;
    data: Prisma.XOR<Prisma.NoteUpdateManyMutationInput, Prisma.NoteUncheckedUpdateManyWithoutEleveInput>;
};
export type NoteScalarWhereInput = {
    AND?: Prisma.NoteScalarWhereInput | Prisma.NoteScalarWhereInput[];
    OR?: Prisma.NoteScalarWhereInput[];
    NOT?: Prisma.NoteScalarWhereInput | Prisma.NoteScalarWhereInput[];
    id?: Prisma.StringFilter<"Note"> | string;
    valeur?: Prisma.FloatFilter<"Note"> | number;
    appreciation?: Prisma.StringNullableFilter<"Note"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Note"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Note"> | Date | string;
    eleveId?: Prisma.StringFilter<"Note"> | string;
    evaluationId?: Prisma.StringFilter<"Note"> | string;
};
export type NoteCreateWithoutEvaluationInput = {
    id?: string;
    valeur: number;
    appreciation?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    eleve: Prisma.EleveCreateNestedOneWithoutNotesInput;
};
export type NoteUncheckedCreateWithoutEvaluationInput = {
    id?: string;
    valeur: number;
    appreciation?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    eleveId: string;
};
export type NoteCreateOrConnectWithoutEvaluationInput = {
    where: Prisma.NoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.NoteCreateWithoutEvaluationInput, Prisma.NoteUncheckedCreateWithoutEvaluationInput>;
};
export type NoteCreateManyEvaluationInputEnvelope = {
    data: Prisma.NoteCreateManyEvaluationInput | Prisma.NoteCreateManyEvaluationInput[];
};
export type NoteUpsertWithWhereUniqueWithoutEvaluationInput = {
    where: Prisma.NoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.NoteUpdateWithoutEvaluationInput, Prisma.NoteUncheckedUpdateWithoutEvaluationInput>;
    create: Prisma.XOR<Prisma.NoteCreateWithoutEvaluationInput, Prisma.NoteUncheckedCreateWithoutEvaluationInput>;
};
export type NoteUpdateWithWhereUniqueWithoutEvaluationInput = {
    where: Prisma.NoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.NoteUpdateWithoutEvaluationInput, Prisma.NoteUncheckedUpdateWithoutEvaluationInput>;
};
export type NoteUpdateManyWithWhereWithoutEvaluationInput = {
    where: Prisma.NoteScalarWhereInput;
    data: Prisma.XOR<Prisma.NoteUpdateManyMutationInput, Prisma.NoteUncheckedUpdateManyWithoutEvaluationInput>;
};
export type NoteCreateManyEleveInput = {
    id?: string;
    valeur: number;
    appreciation?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    evaluationId: string;
};
export type NoteUpdateWithoutEleveInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.FloatFieldUpdateOperationsInput | number;
    appreciation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluation?: Prisma.EvaluationUpdateOneRequiredWithoutNotesNestedInput;
};
export type NoteUncheckedUpdateWithoutEleveInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.FloatFieldUpdateOperationsInput | number;
    appreciation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluationId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NoteUncheckedUpdateManyWithoutEleveInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.FloatFieldUpdateOperationsInput | number;
    appreciation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluationId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NoteCreateManyEvaluationInput = {
    id?: string;
    valeur: number;
    appreciation?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    eleveId: string;
};
export type NoteUpdateWithoutEvaluationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.FloatFieldUpdateOperationsInput | number;
    appreciation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eleve?: Prisma.EleveUpdateOneRequiredWithoutNotesNestedInput;
};
export type NoteUncheckedUpdateWithoutEvaluationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.FloatFieldUpdateOperationsInput | number;
    appreciation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eleveId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NoteUncheckedUpdateManyWithoutEvaluationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.FloatFieldUpdateOperationsInput | number;
    appreciation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eleveId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NoteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    valeur?: boolean;
    appreciation?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    eleveId?: boolean;
    evaluationId?: boolean;
    eleve?: boolean | Prisma.EleveDefaultArgs<ExtArgs>;
    evaluation?: boolean | Prisma.EvaluationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["note"]>;
export type NoteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    valeur?: boolean;
    appreciation?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    eleveId?: boolean;
    evaluationId?: boolean;
    eleve?: boolean | Prisma.EleveDefaultArgs<ExtArgs>;
    evaluation?: boolean | Prisma.EvaluationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["note"]>;
export type NoteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    valeur?: boolean;
    appreciation?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    eleveId?: boolean;
    evaluationId?: boolean;
    eleve?: boolean | Prisma.EleveDefaultArgs<ExtArgs>;
    evaluation?: boolean | Prisma.EvaluationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["note"]>;
export type NoteSelectScalar = {
    id?: boolean;
    valeur?: boolean;
    appreciation?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    eleveId?: boolean;
    evaluationId?: boolean;
};
export type NoteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "valeur" | "appreciation" | "createdAt" | "updatedAt" | "eleveId" | "evaluationId", ExtArgs["result"]["note"]>;
export type NoteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    eleve?: boolean | Prisma.EleveDefaultArgs<ExtArgs>;
    evaluation?: boolean | Prisma.EvaluationDefaultArgs<ExtArgs>;
};
export type NoteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    eleve?: boolean | Prisma.EleveDefaultArgs<ExtArgs>;
    evaluation?: boolean | Prisma.EvaluationDefaultArgs<ExtArgs>;
};
export type NoteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    eleve?: boolean | Prisma.EleveDefaultArgs<ExtArgs>;
    evaluation?: boolean | Prisma.EvaluationDefaultArgs<ExtArgs>;
};
export type $NotePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Note";
    objects: {
        eleve: Prisma.$ElevePayload<ExtArgs>;
        evaluation: Prisma.$EvaluationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        valeur: number;
        appreciation: string | null;
        createdAt: Date;
        updatedAt: Date;
        eleveId: string;
        evaluationId: string;
    }, ExtArgs["result"]["note"]>;
    composites: {};
};
export type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NotePayload, S>;
export type NoteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NoteCountAggregateInputType | true;
};
export interface NoteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Note'];
        meta: {
            name: 'Note';
        };
    };
    findUnique<T extends NoteFindUniqueArgs>(args: Prisma.SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NoteClient<runtime.Types.Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NoteClient<runtime.Types.Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends NoteFindFirstArgs>(args?: Prisma.SelectSubset<T, NoteFindFirstArgs<ExtArgs>>): Prisma.Prisma__NoteClient<runtime.Types.Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NoteClient<runtime.Types.Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends NoteFindManyArgs>(args?: Prisma.SelectSubset<T, NoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends NoteCreateArgs>(args: Prisma.SelectSubset<T, NoteCreateArgs<ExtArgs>>): Prisma.Prisma__NoteClient<runtime.Types.Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends NoteCreateManyArgs>(args?: Prisma.SelectSubset<T, NoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends NoteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends NoteDeleteArgs>(args: Prisma.SelectSubset<T, NoteDeleteArgs<ExtArgs>>): Prisma.Prisma__NoteClient<runtime.Types.Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends NoteUpdateArgs>(args: Prisma.SelectSubset<T, NoteUpdateArgs<ExtArgs>>): Prisma.Prisma__NoteClient<runtime.Types.Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends NoteDeleteManyArgs>(args?: Prisma.SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends NoteUpdateManyArgs>(args: Prisma.SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends NoteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends NoteUpsertArgs>(args: Prisma.SelectSubset<T, NoteUpsertArgs<ExtArgs>>): Prisma.Prisma__NoteClient<runtime.Types.Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends NoteCountArgs>(args?: Prisma.Subset<T, NoteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NoteCountAggregateOutputType> : number>;
    aggregate<T extends NoteAggregateArgs>(args: Prisma.Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>;
    groupBy<T extends NoteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NoteGroupByArgs['orderBy'];
    } : {
        orderBy?: NoteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: NoteFieldRefs;
}
export interface Prisma__NoteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    eleve<T extends Prisma.EleveDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EleveDefaultArgs<ExtArgs>>): Prisma.Prisma__EleveClient<runtime.Types.Result.GetResult<Prisma.$ElevePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    evaluation<T extends Prisma.EvaluationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvaluationDefaultArgs<ExtArgs>>): Prisma.Prisma__EvaluationClient<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface NoteFieldRefs {
    readonly id: Prisma.FieldRef<"Note", 'String'>;
    readonly valeur: Prisma.FieldRef<"Note", 'Float'>;
    readonly appreciation: Prisma.FieldRef<"Note", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Note", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Note", 'DateTime'>;
    readonly eleveId: Prisma.FieldRef<"Note", 'String'>;
    readonly evaluationId: Prisma.FieldRef<"Note", 'String'>;
}
export type NoteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoteSelect<ExtArgs> | null;
    omit?: Prisma.NoteOmit<ExtArgs> | null;
    include?: Prisma.NoteInclude<ExtArgs> | null;
    where: Prisma.NoteWhereUniqueInput;
};
export type NoteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoteSelect<ExtArgs> | null;
    omit?: Prisma.NoteOmit<ExtArgs> | null;
    include?: Prisma.NoteInclude<ExtArgs> | null;
    where: Prisma.NoteWhereUniqueInput;
};
export type NoteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoteSelect<ExtArgs> | null;
    omit?: Prisma.NoteOmit<ExtArgs> | null;
    include?: Prisma.NoteInclude<ExtArgs> | null;
    where?: Prisma.NoteWhereInput;
    orderBy?: Prisma.NoteOrderByWithRelationInput | Prisma.NoteOrderByWithRelationInput[];
    cursor?: Prisma.NoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NoteScalarFieldEnum | Prisma.NoteScalarFieldEnum[];
};
export type NoteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoteSelect<ExtArgs> | null;
    omit?: Prisma.NoteOmit<ExtArgs> | null;
    include?: Prisma.NoteInclude<ExtArgs> | null;
    where?: Prisma.NoteWhereInput;
    orderBy?: Prisma.NoteOrderByWithRelationInput | Prisma.NoteOrderByWithRelationInput[];
    cursor?: Prisma.NoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NoteScalarFieldEnum | Prisma.NoteScalarFieldEnum[];
};
export type NoteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoteSelect<ExtArgs> | null;
    omit?: Prisma.NoteOmit<ExtArgs> | null;
    include?: Prisma.NoteInclude<ExtArgs> | null;
    where?: Prisma.NoteWhereInput;
    orderBy?: Prisma.NoteOrderByWithRelationInput | Prisma.NoteOrderByWithRelationInput[];
    cursor?: Prisma.NoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NoteScalarFieldEnum | Prisma.NoteScalarFieldEnum[];
};
export type NoteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoteSelect<ExtArgs> | null;
    omit?: Prisma.NoteOmit<ExtArgs> | null;
    include?: Prisma.NoteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NoteCreateInput, Prisma.NoteUncheckedCreateInput>;
};
export type NoteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.NoteCreateManyInput | Prisma.NoteCreateManyInput[];
};
export type NoteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NoteOmit<ExtArgs> | null;
    data: Prisma.NoteCreateManyInput | Prisma.NoteCreateManyInput[];
    include?: Prisma.NoteIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type NoteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoteSelect<ExtArgs> | null;
    omit?: Prisma.NoteOmit<ExtArgs> | null;
    include?: Prisma.NoteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NoteUpdateInput, Prisma.NoteUncheckedUpdateInput>;
    where: Prisma.NoteWhereUniqueInput;
};
export type NoteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.NoteUpdateManyMutationInput, Prisma.NoteUncheckedUpdateManyInput>;
    where?: Prisma.NoteWhereInput;
    limit?: number;
};
export type NoteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NoteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NoteUpdateManyMutationInput, Prisma.NoteUncheckedUpdateManyInput>;
    where?: Prisma.NoteWhereInput;
    limit?: number;
    include?: Prisma.NoteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type NoteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoteSelect<ExtArgs> | null;
    omit?: Prisma.NoteOmit<ExtArgs> | null;
    include?: Prisma.NoteInclude<ExtArgs> | null;
    where: Prisma.NoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.NoteCreateInput, Prisma.NoteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.NoteUpdateInput, Prisma.NoteUncheckedUpdateInput>;
};
export type NoteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoteSelect<ExtArgs> | null;
    omit?: Prisma.NoteOmit<ExtArgs> | null;
    include?: Prisma.NoteInclude<ExtArgs> | null;
    where: Prisma.NoteWhereUniqueInput;
};
export type NoteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NoteWhereInput;
    limit?: number;
};
export type NoteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoteSelect<ExtArgs> | null;
    omit?: Prisma.NoteOmit<ExtArgs> | null;
    include?: Prisma.NoteInclude<ExtArgs> | null;
};

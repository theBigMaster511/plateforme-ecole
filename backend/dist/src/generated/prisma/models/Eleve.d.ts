import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EleveModel = runtime.Types.Result.DefaultSelection<Prisma.$ElevePayload>;
export type AggregateEleve = {
    _count: EleveCountAggregateOutputType | null;
    _min: EleveMinAggregateOutputType | null;
    _max: EleveMaxAggregateOutputType | null;
};
export type EleveMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    matricule: string | null;
    dateNaissance: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    classeId: string | null;
};
export type EleveMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    matricule: string | null;
    dateNaissance: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    classeId: string | null;
};
export type EleveCountAggregateOutputType = {
    id: number;
    userId: number;
    matricule: number;
    dateNaissance: number;
    createdAt: number;
    updatedAt: number;
    classeId: number;
    _all: number;
};
export type EleveMinAggregateInputType = {
    id?: true;
    userId?: true;
    matricule?: true;
    dateNaissance?: true;
    createdAt?: true;
    updatedAt?: true;
    classeId?: true;
};
export type EleveMaxAggregateInputType = {
    id?: true;
    userId?: true;
    matricule?: true;
    dateNaissance?: true;
    createdAt?: true;
    updatedAt?: true;
    classeId?: true;
};
export type EleveCountAggregateInputType = {
    id?: true;
    userId?: true;
    matricule?: true;
    dateNaissance?: true;
    createdAt?: true;
    updatedAt?: true;
    classeId?: true;
    _all?: true;
};
export type EleveAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EleveWhereInput;
    orderBy?: Prisma.EleveOrderByWithRelationInput | Prisma.EleveOrderByWithRelationInput[];
    cursor?: Prisma.EleveWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EleveCountAggregateInputType;
    _min?: EleveMinAggregateInputType;
    _max?: EleveMaxAggregateInputType;
};
export type GetEleveAggregateType<T extends EleveAggregateArgs> = {
    [P in keyof T & keyof AggregateEleve]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEleve[P]> : Prisma.GetScalarType<T[P], AggregateEleve[P]>;
};
export type EleveGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EleveWhereInput;
    orderBy?: Prisma.EleveOrderByWithAggregationInput | Prisma.EleveOrderByWithAggregationInput[];
    by: Prisma.EleveScalarFieldEnum[] | Prisma.EleveScalarFieldEnum;
    having?: Prisma.EleveScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EleveCountAggregateInputType | true;
    _min?: EleveMinAggregateInputType;
    _max?: EleveMaxAggregateInputType;
};
export type EleveGroupByOutputType = {
    id: string;
    userId: string;
    matricule: string;
    dateNaissance: Date | null;
    createdAt: Date;
    updatedAt: Date;
    classeId: string | null;
    _count: EleveCountAggregateOutputType | null;
    _min: EleveMinAggregateOutputType | null;
    _max: EleveMaxAggregateOutputType | null;
};
export type GetEleveGroupByPayload<T extends EleveGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EleveGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EleveGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EleveGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EleveGroupByOutputType[P]>;
}>>;
export type EleveWhereInput = {
    AND?: Prisma.EleveWhereInput | Prisma.EleveWhereInput[];
    OR?: Prisma.EleveWhereInput[];
    NOT?: Prisma.EleveWhereInput | Prisma.EleveWhereInput[];
    id?: Prisma.StringFilter<"Eleve"> | string;
    userId?: Prisma.StringFilter<"Eleve"> | string;
    matricule?: Prisma.StringFilter<"Eleve"> | string;
    dateNaissance?: Prisma.DateTimeNullableFilter<"Eleve"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Eleve"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Eleve"> | Date | string;
    classeId?: Prisma.StringNullableFilter<"Eleve"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    classe?: Prisma.XOR<Prisma.ClasseNullableScalarRelationFilter, Prisma.ClasseWhereInput> | null;
    notes?: Prisma.NoteListRelationFilter;
    parents?: Prisma.ParentEleveListRelationFilter;
};
export type EleveOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    matricule?: Prisma.SortOrder;
    dateNaissance?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    classeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    classe?: Prisma.ClasseOrderByWithRelationInput;
    notes?: Prisma.NoteOrderByRelationAggregateInput;
    parents?: Prisma.ParentEleveOrderByRelationAggregateInput;
};
export type EleveWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    matricule?: string;
    AND?: Prisma.EleveWhereInput | Prisma.EleveWhereInput[];
    OR?: Prisma.EleveWhereInput[];
    NOT?: Prisma.EleveWhereInput | Prisma.EleveWhereInput[];
    dateNaissance?: Prisma.DateTimeNullableFilter<"Eleve"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Eleve"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Eleve"> | Date | string;
    classeId?: Prisma.StringNullableFilter<"Eleve"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    classe?: Prisma.XOR<Prisma.ClasseNullableScalarRelationFilter, Prisma.ClasseWhereInput> | null;
    notes?: Prisma.NoteListRelationFilter;
    parents?: Prisma.ParentEleveListRelationFilter;
}, "id" | "userId" | "matricule">;
export type EleveOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    matricule?: Prisma.SortOrder;
    dateNaissance?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    classeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.EleveCountOrderByAggregateInput;
    _max?: Prisma.EleveMaxOrderByAggregateInput;
    _min?: Prisma.EleveMinOrderByAggregateInput;
};
export type EleveScalarWhereWithAggregatesInput = {
    AND?: Prisma.EleveScalarWhereWithAggregatesInput | Prisma.EleveScalarWhereWithAggregatesInput[];
    OR?: Prisma.EleveScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EleveScalarWhereWithAggregatesInput | Prisma.EleveScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Eleve"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Eleve"> | string;
    matricule?: Prisma.StringWithAggregatesFilter<"Eleve"> | string;
    dateNaissance?: Prisma.DateTimeNullableWithAggregatesFilter<"Eleve"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Eleve"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Eleve"> | Date | string;
    classeId?: Prisma.StringNullableWithAggregatesFilter<"Eleve"> | string | null;
};
export type EleveCreateInput = {
    id?: string;
    matricule: string;
    dateNaissance?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutEleveInput;
    classe?: Prisma.ClasseCreateNestedOneWithoutElevesInput;
    notes?: Prisma.NoteCreateNestedManyWithoutEleveInput;
    parents?: Prisma.ParentEleveCreateNestedManyWithoutEleveInput;
};
export type EleveUncheckedCreateInput = {
    id?: string;
    userId: string;
    matricule: string;
    dateNaissance?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classeId?: string | null;
    notes?: Prisma.NoteUncheckedCreateNestedManyWithoutEleveInput;
    parents?: Prisma.ParentEleveUncheckedCreateNestedManyWithoutEleveInput;
};
export type EleveUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutEleveNestedInput;
    classe?: Prisma.ClasseUpdateOneWithoutElevesNestedInput;
    notes?: Prisma.NoteUpdateManyWithoutEleveNestedInput;
    parents?: Prisma.ParentEleveUpdateManyWithoutEleveNestedInput;
};
export type EleveUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NoteUncheckedUpdateManyWithoutEleveNestedInput;
    parents?: Prisma.ParentEleveUncheckedUpdateManyWithoutEleveNestedInput;
};
export type EleveCreateManyInput = {
    id?: string;
    userId: string;
    matricule: string;
    dateNaissance?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classeId?: string | null;
};
export type EleveUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EleveUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EleveNullableScalarRelationFilter = {
    is?: Prisma.EleveWhereInput | null;
    isNot?: Prisma.EleveWhereInput | null;
};
export type EleveCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    matricule?: Prisma.SortOrder;
    dateNaissance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
};
export type EleveMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    matricule?: Prisma.SortOrder;
    dateNaissance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
};
export type EleveMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    matricule?: Prisma.SortOrder;
    dateNaissance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
};
export type EleveScalarRelationFilter = {
    is?: Prisma.EleveWhereInput;
    isNot?: Prisma.EleveWhereInput;
};
export type EleveListRelationFilter = {
    every?: Prisma.EleveWhereInput;
    some?: Prisma.EleveWhereInput;
    none?: Prisma.EleveWhereInput;
};
export type EleveOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EleveCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.EleveCreateWithoutUserInput, Prisma.EleveUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.EleveCreateOrConnectWithoutUserInput;
    connect?: Prisma.EleveWhereUniqueInput;
};
export type EleveUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.EleveCreateWithoutUserInput, Prisma.EleveUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.EleveCreateOrConnectWithoutUserInput;
    connect?: Prisma.EleveWhereUniqueInput;
};
export type EleveUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.EleveCreateWithoutUserInput, Prisma.EleveUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.EleveCreateOrConnectWithoutUserInput;
    upsert?: Prisma.EleveUpsertWithoutUserInput;
    disconnect?: Prisma.EleveWhereInput | boolean;
    delete?: Prisma.EleveWhereInput | boolean;
    connect?: Prisma.EleveWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EleveUpdateToOneWithWhereWithoutUserInput, Prisma.EleveUpdateWithoutUserInput>, Prisma.EleveUncheckedUpdateWithoutUserInput>;
};
export type EleveUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.EleveCreateWithoutUserInput, Prisma.EleveUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.EleveCreateOrConnectWithoutUserInput;
    upsert?: Prisma.EleveUpsertWithoutUserInput;
    disconnect?: Prisma.EleveWhereInput | boolean;
    delete?: Prisma.EleveWhereInput | boolean;
    connect?: Prisma.EleveWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EleveUpdateToOneWithWhereWithoutUserInput, Prisma.EleveUpdateWithoutUserInput>, Prisma.EleveUncheckedUpdateWithoutUserInput>;
};
export type EleveCreateNestedOneWithoutParentsInput = {
    create?: Prisma.XOR<Prisma.EleveCreateWithoutParentsInput, Prisma.EleveUncheckedCreateWithoutParentsInput>;
    connectOrCreate?: Prisma.EleveCreateOrConnectWithoutParentsInput;
    connect?: Prisma.EleveWhereUniqueInput;
};
export type EleveUpdateOneRequiredWithoutParentsNestedInput = {
    create?: Prisma.XOR<Prisma.EleveCreateWithoutParentsInput, Prisma.EleveUncheckedCreateWithoutParentsInput>;
    connectOrCreate?: Prisma.EleveCreateOrConnectWithoutParentsInput;
    upsert?: Prisma.EleveUpsertWithoutParentsInput;
    connect?: Prisma.EleveWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EleveUpdateToOneWithWhereWithoutParentsInput, Prisma.EleveUpdateWithoutParentsInput>, Prisma.EleveUncheckedUpdateWithoutParentsInput>;
};
export type EleveCreateNestedManyWithoutClasseInput = {
    create?: Prisma.XOR<Prisma.EleveCreateWithoutClasseInput, Prisma.EleveUncheckedCreateWithoutClasseInput> | Prisma.EleveCreateWithoutClasseInput[] | Prisma.EleveUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.EleveCreateOrConnectWithoutClasseInput | Prisma.EleveCreateOrConnectWithoutClasseInput[];
    createMany?: Prisma.EleveCreateManyClasseInputEnvelope;
    connect?: Prisma.EleveWhereUniqueInput | Prisma.EleveWhereUniqueInput[];
};
export type EleveUncheckedCreateNestedManyWithoutClasseInput = {
    create?: Prisma.XOR<Prisma.EleveCreateWithoutClasseInput, Prisma.EleveUncheckedCreateWithoutClasseInput> | Prisma.EleveCreateWithoutClasseInput[] | Prisma.EleveUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.EleveCreateOrConnectWithoutClasseInput | Prisma.EleveCreateOrConnectWithoutClasseInput[];
    createMany?: Prisma.EleveCreateManyClasseInputEnvelope;
    connect?: Prisma.EleveWhereUniqueInput | Prisma.EleveWhereUniqueInput[];
};
export type EleveUpdateManyWithoutClasseNestedInput = {
    create?: Prisma.XOR<Prisma.EleveCreateWithoutClasseInput, Prisma.EleveUncheckedCreateWithoutClasseInput> | Prisma.EleveCreateWithoutClasseInput[] | Prisma.EleveUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.EleveCreateOrConnectWithoutClasseInput | Prisma.EleveCreateOrConnectWithoutClasseInput[];
    upsert?: Prisma.EleveUpsertWithWhereUniqueWithoutClasseInput | Prisma.EleveUpsertWithWhereUniqueWithoutClasseInput[];
    createMany?: Prisma.EleveCreateManyClasseInputEnvelope;
    set?: Prisma.EleveWhereUniqueInput | Prisma.EleveWhereUniqueInput[];
    disconnect?: Prisma.EleveWhereUniqueInput | Prisma.EleveWhereUniqueInput[];
    delete?: Prisma.EleveWhereUniqueInput | Prisma.EleveWhereUniqueInput[];
    connect?: Prisma.EleveWhereUniqueInput | Prisma.EleveWhereUniqueInput[];
    update?: Prisma.EleveUpdateWithWhereUniqueWithoutClasseInput | Prisma.EleveUpdateWithWhereUniqueWithoutClasseInput[];
    updateMany?: Prisma.EleveUpdateManyWithWhereWithoutClasseInput | Prisma.EleveUpdateManyWithWhereWithoutClasseInput[];
    deleteMany?: Prisma.EleveScalarWhereInput | Prisma.EleveScalarWhereInput[];
};
export type EleveUncheckedUpdateManyWithoutClasseNestedInput = {
    create?: Prisma.XOR<Prisma.EleveCreateWithoutClasseInput, Prisma.EleveUncheckedCreateWithoutClasseInput> | Prisma.EleveCreateWithoutClasseInput[] | Prisma.EleveUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.EleveCreateOrConnectWithoutClasseInput | Prisma.EleveCreateOrConnectWithoutClasseInput[];
    upsert?: Prisma.EleveUpsertWithWhereUniqueWithoutClasseInput | Prisma.EleveUpsertWithWhereUniqueWithoutClasseInput[];
    createMany?: Prisma.EleveCreateManyClasseInputEnvelope;
    set?: Prisma.EleveWhereUniqueInput | Prisma.EleveWhereUniqueInput[];
    disconnect?: Prisma.EleveWhereUniqueInput | Prisma.EleveWhereUniqueInput[];
    delete?: Prisma.EleveWhereUniqueInput | Prisma.EleveWhereUniqueInput[];
    connect?: Prisma.EleveWhereUniqueInput | Prisma.EleveWhereUniqueInput[];
    update?: Prisma.EleveUpdateWithWhereUniqueWithoutClasseInput | Prisma.EleveUpdateWithWhereUniqueWithoutClasseInput[];
    updateMany?: Prisma.EleveUpdateManyWithWhereWithoutClasseInput | Prisma.EleveUpdateManyWithWhereWithoutClasseInput[];
    deleteMany?: Prisma.EleveScalarWhereInput | Prisma.EleveScalarWhereInput[];
};
export type EleveCreateNestedOneWithoutNotesInput = {
    create?: Prisma.XOR<Prisma.EleveCreateWithoutNotesInput, Prisma.EleveUncheckedCreateWithoutNotesInput>;
    connectOrCreate?: Prisma.EleveCreateOrConnectWithoutNotesInput;
    connect?: Prisma.EleveWhereUniqueInput;
};
export type EleveUpdateOneRequiredWithoutNotesNestedInput = {
    create?: Prisma.XOR<Prisma.EleveCreateWithoutNotesInput, Prisma.EleveUncheckedCreateWithoutNotesInput>;
    connectOrCreate?: Prisma.EleveCreateOrConnectWithoutNotesInput;
    upsert?: Prisma.EleveUpsertWithoutNotesInput;
    connect?: Prisma.EleveWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EleveUpdateToOneWithWhereWithoutNotesInput, Prisma.EleveUpdateWithoutNotesInput>, Prisma.EleveUncheckedUpdateWithoutNotesInput>;
};
export type EleveCreateWithoutUserInput = {
    id?: string;
    matricule: string;
    dateNaissance?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classe?: Prisma.ClasseCreateNestedOneWithoutElevesInput;
    notes?: Prisma.NoteCreateNestedManyWithoutEleveInput;
    parents?: Prisma.ParentEleveCreateNestedManyWithoutEleveInput;
};
export type EleveUncheckedCreateWithoutUserInput = {
    id?: string;
    matricule: string;
    dateNaissance?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classeId?: string | null;
    notes?: Prisma.NoteUncheckedCreateNestedManyWithoutEleveInput;
    parents?: Prisma.ParentEleveUncheckedCreateNestedManyWithoutEleveInput;
};
export type EleveCreateOrConnectWithoutUserInput = {
    where: Prisma.EleveWhereUniqueInput;
    create: Prisma.XOR<Prisma.EleveCreateWithoutUserInput, Prisma.EleveUncheckedCreateWithoutUserInput>;
};
export type EleveUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.EleveUpdateWithoutUserInput, Prisma.EleveUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.EleveCreateWithoutUserInput, Prisma.EleveUncheckedCreateWithoutUserInput>;
    where?: Prisma.EleveWhereInput;
};
export type EleveUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.EleveWhereInput;
    data: Prisma.XOR<Prisma.EleveUpdateWithoutUserInput, Prisma.EleveUncheckedUpdateWithoutUserInput>;
};
export type EleveUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classe?: Prisma.ClasseUpdateOneWithoutElevesNestedInput;
    notes?: Prisma.NoteUpdateManyWithoutEleveNestedInput;
    parents?: Prisma.ParentEleveUpdateManyWithoutEleveNestedInput;
};
export type EleveUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NoteUncheckedUpdateManyWithoutEleveNestedInput;
    parents?: Prisma.ParentEleveUncheckedUpdateManyWithoutEleveNestedInput;
};
export type EleveCreateWithoutParentsInput = {
    id?: string;
    matricule: string;
    dateNaissance?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutEleveInput;
    classe?: Prisma.ClasseCreateNestedOneWithoutElevesInput;
    notes?: Prisma.NoteCreateNestedManyWithoutEleveInput;
};
export type EleveUncheckedCreateWithoutParentsInput = {
    id?: string;
    userId: string;
    matricule: string;
    dateNaissance?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classeId?: string | null;
    notes?: Prisma.NoteUncheckedCreateNestedManyWithoutEleveInput;
};
export type EleveCreateOrConnectWithoutParentsInput = {
    where: Prisma.EleveWhereUniqueInput;
    create: Prisma.XOR<Prisma.EleveCreateWithoutParentsInput, Prisma.EleveUncheckedCreateWithoutParentsInput>;
};
export type EleveUpsertWithoutParentsInput = {
    update: Prisma.XOR<Prisma.EleveUpdateWithoutParentsInput, Prisma.EleveUncheckedUpdateWithoutParentsInput>;
    create: Prisma.XOR<Prisma.EleveCreateWithoutParentsInput, Prisma.EleveUncheckedCreateWithoutParentsInput>;
    where?: Prisma.EleveWhereInput;
};
export type EleveUpdateToOneWithWhereWithoutParentsInput = {
    where?: Prisma.EleveWhereInput;
    data: Prisma.XOR<Prisma.EleveUpdateWithoutParentsInput, Prisma.EleveUncheckedUpdateWithoutParentsInput>;
};
export type EleveUpdateWithoutParentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutEleveNestedInput;
    classe?: Prisma.ClasseUpdateOneWithoutElevesNestedInput;
    notes?: Prisma.NoteUpdateManyWithoutEleveNestedInput;
};
export type EleveUncheckedUpdateWithoutParentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NoteUncheckedUpdateManyWithoutEleveNestedInput;
};
export type EleveCreateWithoutClasseInput = {
    id?: string;
    matricule: string;
    dateNaissance?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutEleveInput;
    notes?: Prisma.NoteCreateNestedManyWithoutEleveInput;
    parents?: Prisma.ParentEleveCreateNestedManyWithoutEleveInput;
};
export type EleveUncheckedCreateWithoutClasseInput = {
    id?: string;
    userId: string;
    matricule: string;
    dateNaissance?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    notes?: Prisma.NoteUncheckedCreateNestedManyWithoutEleveInput;
    parents?: Prisma.ParentEleveUncheckedCreateNestedManyWithoutEleveInput;
};
export type EleveCreateOrConnectWithoutClasseInput = {
    where: Prisma.EleveWhereUniqueInput;
    create: Prisma.XOR<Prisma.EleveCreateWithoutClasseInput, Prisma.EleveUncheckedCreateWithoutClasseInput>;
};
export type EleveCreateManyClasseInputEnvelope = {
    data: Prisma.EleveCreateManyClasseInput | Prisma.EleveCreateManyClasseInput[];
};
export type EleveUpsertWithWhereUniqueWithoutClasseInput = {
    where: Prisma.EleveWhereUniqueInput;
    update: Prisma.XOR<Prisma.EleveUpdateWithoutClasseInput, Prisma.EleveUncheckedUpdateWithoutClasseInput>;
    create: Prisma.XOR<Prisma.EleveCreateWithoutClasseInput, Prisma.EleveUncheckedCreateWithoutClasseInput>;
};
export type EleveUpdateWithWhereUniqueWithoutClasseInput = {
    where: Prisma.EleveWhereUniqueInput;
    data: Prisma.XOR<Prisma.EleveUpdateWithoutClasseInput, Prisma.EleveUncheckedUpdateWithoutClasseInput>;
};
export type EleveUpdateManyWithWhereWithoutClasseInput = {
    where: Prisma.EleveScalarWhereInput;
    data: Prisma.XOR<Prisma.EleveUpdateManyMutationInput, Prisma.EleveUncheckedUpdateManyWithoutClasseInput>;
};
export type EleveScalarWhereInput = {
    AND?: Prisma.EleveScalarWhereInput | Prisma.EleveScalarWhereInput[];
    OR?: Prisma.EleveScalarWhereInput[];
    NOT?: Prisma.EleveScalarWhereInput | Prisma.EleveScalarWhereInput[];
    id?: Prisma.StringFilter<"Eleve"> | string;
    userId?: Prisma.StringFilter<"Eleve"> | string;
    matricule?: Prisma.StringFilter<"Eleve"> | string;
    dateNaissance?: Prisma.DateTimeNullableFilter<"Eleve"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Eleve"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Eleve"> | Date | string;
    classeId?: Prisma.StringNullableFilter<"Eleve"> | string | null;
};
export type EleveCreateWithoutNotesInput = {
    id?: string;
    matricule: string;
    dateNaissance?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutEleveInput;
    classe?: Prisma.ClasseCreateNestedOneWithoutElevesInput;
    parents?: Prisma.ParentEleveCreateNestedManyWithoutEleveInput;
};
export type EleveUncheckedCreateWithoutNotesInput = {
    id?: string;
    userId: string;
    matricule: string;
    dateNaissance?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classeId?: string | null;
    parents?: Prisma.ParentEleveUncheckedCreateNestedManyWithoutEleveInput;
};
export type EleveCreateOrConnectWithoutNotesInput = {
    where: Prisma.EleveWhereUniqueInput;
    create: Prisma.XOR<Prisma.EleveCreateWithoutNotesInput, Prisma.EleveUncheckedCreateWithoutNotesInput>;
};
export type EleveUpsertWithoutNotesInput = {
    update: Prisma.XOR<Prisma.EleveUpdateWithoutNotesInput, Prisma.EleveUncheckedUpdateWithoutNotesInput>;
    create: Prisma.XOR<Prisma.EleveCreateWithoutNotesInput, Prisma.EleveUncheckedCreateWithoutNotesInput>;
    where?: Prisma.EleveWhereInput;
};
export type EleveUpdateToOneWithWhereWithoutNotesInput = {
    where?: Prisma.EleveWhereInput;
    data: Prisma.XOR<Prisma.EleveUpdateWithoutNotesInput, Prisma.EleveUncheckedUpdateWithoutNotesInput>;
};
export type EleveUpdateWithoutNotesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutEleveNestedInput;
    classe?: Prisma.ClasseUpdateOneWithoutElevesNestedInput;
    parents?: Prisma.ParentEleveUpdateManyWithoutEleveNestedInput;
};
export type EleveUncheckedUpdateWithoutNotesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parents?: Prisma.ParentEleveUncheckedUpdateManyWithoutEleveNestedInput;
};
export type EleveCreateManyClasseInput = {
    id?: string;
    userId: string;
    matricule: string;
    dateNaissance?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EleveUpdateWithoutClasseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutEleveNestedInput;
    notes?: Prisma.NoteUpdateManyWithoutEleveNestedInput;
    parents?: Prisma.ParentEleveUpdateManyWithoutEleveNestedInput;
};
export type EleveUncheckedUpdateWithoutClasseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NoteUncheckedUpdateManyWithoutEleveNestedInput;
    parents?: Prisma.ParentEleveUncheckedUpdateManyWithoutEleveNestedInput;
};
export type EleveUncheckedUpdateManyWithoutClasseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EleveCountOutputType = {
    notes: number;
    parents: number;
};
export type EleveCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    notes?: boolean | EleveCountOutputTypeCountNotesArgs;
    parents?: boolean | EleveCountOutputTypeCountParentsArgs;
};
export type EleveCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EleveCountOutputTypeSelect<ExtArgs> | null;
};
export type EleveCountOutputTypeCountNotesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NoteWhereInput;
};
export type EleveCountOutputTypeCountParentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParentEleveWhereInput;
};
export type EleveSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    matricule?: boolean;
    dateNaissance?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    classeId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    classe?: boolean | Prisma.Eleve$classeArgs<ExtArgs>;
    notes?: boolean | Prisma.Eleve$notesArgs<ExtArgs>;
    parents?: boolean | Prisma.Eleve$parentsArgs<ExtArgs>;
    _count?: boolean | Prisma.EleveCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eleve"]>;
export type EleveSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    matricule?: boolean;
    dateNaissance?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    classeId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    classe?: boolean | Prisma.Eleve$classeArgs<ExtArgs>;
}, ExtArgs["result"]["eleve"]>;
export type EleveSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    matricule?: boolean;
    dateNaissance?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    classeId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    classe?: boolean | Prisma.Eleve$classeArgs<ExtArgs>;
}, ExtArgs["result"]["eleve"]>;
export type EleveSelectScalar = {
    id?: boolean;
    userId?: boolean;
    matricule?: boolean;
    dateNaissance?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    classeId?: boolean;
};
export type EleveOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "matricule" | "dateNaissance" | "createdAt" | "updatedAt" | "classeId", ExtArgs["result"]["eleve"]>;
export type EleveInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    classe?: boolean | Prisma.Eleve$classeArgs<ExtArgs>;
    notes?: boolean | Prisma.Eleve$notesArgs<ExtArgs>;
    parents?: boolean | Prisma.Eleve$parentsArgs<ExtArgs>;
    _count?: boolean | Prisma.EleveCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EleveIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    classe?: boolean | Prisma.Eleve$classeArgs<ExtArgs>;
};
export type EleveIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    classe?: boolean | Prisma.Eleve$classeArgs<ExtArgs>;
};
export type $ElevePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Eleve";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        classe: Prisma.$ClassePayload<ExtArgs> | null;
        notes: Prisma.$NotePayload<ExtArgs>[];
        parents: Prisma.$ParentElevePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        matricule: string;
        dateNaissance: Date | null;
        createdAt: Date;
        updatedAt: Date;
        classeId: string | null;
    }, ExtArgs["result"]["eleve"]>;
    composites: {};
};
export type EleveGetPayload<S extends boolean | null | undefined | EleveDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ElevePayload, S>;
export type EleveCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EleveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EleveCountAggregateInputType | true;
};
export interface EleveDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Eleve'];
        meta: {
            name: 'Eleve';
        };
    };
    findUnique<T extends EleveFindUniqueArgs>(args: Prisma.SelectSubset<T, EleveFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EleveClient<runtime.Types.Result.GetResult<Prisma.$ElevePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EleveFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EleveFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EleveClient<runtime.Types.Result.GetResult<Prisma.$ElevePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EleveFindFirstArgs>(args?: Prisma.SelectSubset<T, EleveFindFirstArgs<ExtArgs>>): Prisma.Prisma__EleveClient<runtime.Types.Result.GetResult<Prisma.$ElevePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EleveFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EleveFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EleveClient<runtime.Types.Result.GetResult<Prisma.$ElevePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EleveFindManyArgs>(args?: Prisma.SelectSubset<T, EleveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ElevePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EleveCreateArgs>(args: Prisma.SelectSubset<T, EleveCreateArgs<ExtArgs>>): Prisma.Prisma__EleveClient<runtime.Types.Result.GetResult<Prisma.$ElevePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EleveCreateManyArgs>(args?: Prisma.SelectSubset<T, EleveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EleveCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EleveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ElevePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EleveDeleteArgs>(args: Prisma.SelectSubset<T, EleveDeleteArgs<ExtArgs>>): Prisma.Prisma__EleveClient<runtime.Types.Result.GetResult<Prisma.$ElevePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EleveUpdateArgs>(args: Prisma.SelectSubset<T, EleveUpdateArgs<ExtArgs>>): Prisma.Prisma__EleveClient<runtime.Types.Result.GetResult<Prisma.$ElevePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EleveDeleteManyArgs>(args?: Prisma.SelectSubset<T, EleveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EleveUpdateManyArgs>(args: Prisma.SelectSubset<T, EleveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EleveUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EleveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ElevePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EleveUpsertArgs>(args: Prisma.SelectSubset<T, EleveUpsertArgs<ExtArgs>>): Prisma.Prisma__EleveClient<runtime.Types.Result.GetResult<Prisma.$ElevePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EleveCountArgs>(args?: Prisma.Subset<T, EleveCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EleveCountAggregateOutputType> : number>;
    aggregate<T extends EleveAggregateArgs>(args: Prisma.Subset<T, EleveAggregateArgs>): Prisma.PrismaPromise<GetEleveAggregateType<T>>;
    groupBy<T extends EleveGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EleveGroupByArgs['orderBy'];
    } : {
        orderBy?: EleveGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EleveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEleveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EleveFieldRefs;
}
export interface Prisma__EleveClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    classe<T extends Prisma.Eleve$classeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Eleve$classeArgs<ExtArgs>>): Prisma.Prisma__ClasseClient<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    notes<T extends Prisma.Eleve$notesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Eleve$notesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    parents<T extends Prisma.Eleve$parentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Eleve$parentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParentElevePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EleveFieldRefs {
    readonly id: Prisma.FieldRef<"Eleve", 'String'>;
    readonly userId: Prisma.FieldRef<"Eleve", 'String'>;
    readonly matricule: Prisma.FieldRef<"Eleve", 'String'>;
    readonly dateNaissance: Prisma.FieldRef<"Eleve", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Eleve", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Eleve", 'DateTime'>;
    readonly classeId: Prisma.FieldRef<"Eleve", 'String'>;
}
export type EleveFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EleveSelect<ExtArgs> | null;
    omit?: Prisma.EleveOmit<ExtArgs> | null;
    include?: Prisma.EleveInclude<ExtArgs> | null;
    where: Prisma.EleveWhereUniqueInput;
};
export type EleveFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EleveSelect<ExtArgs> | null;
    omit?: Prisma.EleveOmit<ExtArgs> | null;
    include?: Prisma.EleveInclude<ExtArgs> | null;
    where: Prisma.EleveWhereUniqueInput;
};
export type EleveFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EleveSelect<ExtArgs> | null;
    omit?: Prisma.EleveOmit<ExtArgs> | null;
    include?: Prisma.EleveInclude<ExtArgs> | null;
    where?: Prisma.EleveWhereInput;
    orderBy?: Prisma.EleveOrderByWithRelationInput | Prisma.EleveOrderByWithRelationInput[];
    cursor?: Prisma.EleveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EleveScalarFieldEnum | Prisma.EleveScalarFieldEnum[];
};
export type EleveFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EleveSelect<ExtArgs> | null;
    omit?: Prisma.EleveOmit<ExtArgs> | null;
    include?: Prisma.EleveInclude<ExtArgs> | null;
    where?: Prisma.EleveWhereInput;
    orderBy?: Prisma.EleveOrderByWithRelationInput | Prisma.EleveOrderByWithRelationInput[];
    cursor?: Prisma.EleveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EleveScalarFieldEnum | Prisma.EleveScalarFieldEnum[];
};
export type EleveFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EleveSelect<ExtArgs> | null;
    omit?: Prisma.EleveOmit<ExtArgs> | null;
    include?: Prisma.EleveInclude<ExtArgs> | null;
    where?: Prisma.EleveWhereInput;
    orderBy?: Prisma.EleveOrderByWithRelationInput | Prisma.EleveOrderByWithRelationInput[];
    cursor?: Prisma.EleveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EleveScalarFieldEnum | Prisma.EleveScalarFieldEnum[];
};
export type EleveCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EleveSelect<ExtArgs> | null;
    omit?: Prisma.EleveOmit<ExtArgs> | null;
    include?: Prisma.EleveInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EleveCreateInput, Prisma.EleveUncheckedCreateInput>;
};
export type EleveCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EleveCreateManyInput | Prisma.EleveCreateManyInput[];
};
export type EleveCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EleveSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EleveOmit<ExtArgs> | null;
    data: Prisma.EleveCreateManyInput | Prisma.EleveCreateManyInput[];
    include?: Prisma.EleveIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EleveUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EleveSelect<ExtArgs> | null;
    omit?: Prisma.EleveOmit<ExtArgs> | null;
    include?: Prisma.EleveInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EleveUpdateInput, Prisma.EleveUncheckedUpdateInput>;
    where: Prisma.EleveWhereUniqueInput;
};
export type EleveUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EleveUpdateManyMutationInput, Prisma.EleveUncheckedUpdateManyInput>;
    where?: Prisma.EleveWhereInput;
    limit?: number;
};
export type EleveUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EleveSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EleveOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EleveUpdateManyMutationInput, Prisma.EleveUncheckedUpdateManyInput>;
    where?: Prisma.EleveWhereInput;
    limit?: number;
    include?: Prisma.EleveIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EleveUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EleveSelect<ExtArgs> | null;
    omit?: Prisma.EleveOmit<ExtArgs> | null;
    include?: Prisma.EleveInclude<ExtArgs> | null;
    where: Prisma.EleveWhereUniqueInput;
    create: Prisma.XOR<Prisma.EleveCreateInput, Prisma.EleveUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EleveUpdateInput, Prisma.EleveUncheckedUpdateInput>;
};
export type EleveDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EleveSelect<ExtArgs> | null;
    omit?: Prisma.EleveOmit<ExtArgs> | null;
    include?: Prisma.EleveInclude<ExtArgs> | null;
    where: Prisma.EleveWhereUniqueInput;
};
export type EleveDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EleveWhereInput;
    limit?: number;
};
export type Eleve$classeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseSelect<ExtArgs> | null;
    omit?: Prisma.ClasseOmit<ExtArgs> | null;
    include?: Prisma.ClasseInclude<ExtArgs> | null;
    where?: Prisma.ClasseWhereInput;
};
export type Eleve$notesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Eleve$parentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EleveDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EleveSelect<ExtArgs> | null;
    omit?: Prisma.EleveOmit<ExtArgs> | null;
    include?: Prisma.EleveInclude<ExtArgs> | null;
};

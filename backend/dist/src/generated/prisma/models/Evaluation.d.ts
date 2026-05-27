import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EvaluationModel = runtime.Types.Result.DefaultSelection<Prisma.$EvaluationPayload>;
export type AggregateEvaluation = {
    _count: EvaluationCountAggregateOutputType | null;
    _min: EvaluationMinAggregateOutputType | null;
    _max: EvaluationMaxAggregateOutputType | null;
};
export type EvaluationMinAggregateOutputType = {
    id: string | null;
    titre: string | null;
    type: $Enums.EvalType | null;
    date: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    matiereId: string | null;
    professeurId: string | null;
};
export type EvaluationMaxAggregateOutputType = {
    id: string | null;
    titre: string | null;
    type: $Enums.EvalType | null;
    date: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    matiereId: string | null;
    professeurId: string | null;
};
export type EvaluationCountAggregateOutputType = {
    id: number;
    titre: number;
    type: number;
    date: number;
    createdAt: number;
    updatedAt: number;
    matiereId: number;
    professeurId: number;
    _all: number;
};
export type EvaluationMinAggregateInputType = {
    id?: true;
    titre?: true;
    type?: true;
    date?: true;
    createdAt?: true;
    updatedAt?: true;
    matiereId?: true;
    professeurId?: true;
};
export type EvaluationMaxAggregateInputType = {
    id?: true;
    titre?: true;
    type?: true;
    date?: true;
    createdAt?: true;
    updatedAt?: true;
    matiereId?: true;
    professeurId?: true;
};
export type EvaluationCountAggregateInputType = {
    id?: true;
    titre?: true;
    type?: true;
    date?: true;
    createdAt?: true;
    updatedAt?: true;
    matiereId?: true;
    professeurId?: true;
    _all?: true;
};
export type EvaluationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationWhereInput;
    orderBy?: Prisma.EvaluationOrderByWithRelationInput | Prisma.EvaluationOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EvaluationCountAggregateInputType;
    _min?: EvaluationMinAggregateInputType;
    _max?: EvaluationMaxAggregateInputType;
};
export type GetEvaluationAggregateType<T extends EvaluationAggregateArgs> = {
    [P in keyof T & keyof AggregateEvaluation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEvaluation[P]> : Prisma.GetScalarType<T[P], AggregateEvaluation[P]>;
};
export type EvaluationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationWhereInput;
    orderBy?: Prisma.EvaluationOrderByWithAggregationInput | Prisma.EvaluationOrderByWithAggregationInput[];
    by: Prisma.EvaluationScalarFieldEnum[] | Prisma.EvaluationScalarFieldEnum;
    having?: Prisma.EvaluationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EvaluationCountAggregateInputType | true;
    _min?: EvaluationMinAggregateInputType;
    _max?: EvaluationMaxAggregateInputType;
};
export type EvaluationGroupByOutputType = {
    id: string;
    titre: string;
    type: $Enums.EvalType;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
    matiereId: string;
    professeurId: string;
    _count: EvaluationCountAggregateOutputType | null;
    _min: EvaluationMinAggregateOutputType | null;
    _max: EvaluationMaxAggregateOutputType | null;
};
export type GetEvaluationGroupByPayload<T extends EvaluationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EvaluationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EvaluationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EvaluationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EvaluationGroupByOutputType[P]>;
}>>;
export type EvaluationWhereInput = {
    AND?: Prisma.EvaluationWhereInput | Prisma.EvaluationWhereInput[];
    OR?: Prisma.EvaluationWhereInput[];
    NOT?: Prisma.EvaluationWhereInput | Prisma.EvaluationWhereInput[];
    id?: Prisma.StringFilter<"Evaluation"> | string;
    titre?: Prisma.StringFilter<"Evaluation"> | string;
    type?: Prisma.EnumEvalTypeFilter<"Evaluation"> | $Enums.EvalType;
    date?: Prisma.DateTimeFilter<"Evaluation"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Evaluation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Evaluation"> | Date | string;
    matiereId?: Prisma.StringFilter<"Evaluation"> | string;
    professeurId?: Prisma.StringFilter<"Evaluation"> | string;
    matiere?: Prisma.XOR<Prisma.MatiereScalarRelationFilter, Prisma.MatiereWhereInput>;
    professeur?: Prisma.XOR<Prisma.ProfesseurScalarRelationFilter, Prisma.ProfesseurWhereInput>;
    notes?: Prisma.NoteListRelationFilter;
};
export type EvaluationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    professeurId?: Prisma.SortOrder;
    matiere?: Prisma.MatiereOrderByWithRelationInput;
    professeur?: Prisma.ProfesseurOrderByWithRelationInput;
    notes?: Prisma.NoteOrderByRelationAggregateInput;
};
export type EvaluationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EvaluationWhereInput | Prisma.EvaluationWhereInput[];
    OR?: Prisma.EvaluationWhereInput[];
    NOT?: Prisma.EvaluationWhereInput | Prisma.EvaluationWhereInput[];
    titre?: Prisma.StringFilter<"Evaluation"> | string;
    type?: Prisma.EnumEvalTypeFilter<"Evaluation"> | $Enums.EvalType;
    date?: Prisma.DateTimeFilter<"Evaluation"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Evaluation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Evaluation"> | Date | string;
    matiereId?: Prisma.StringFilter<"Evaluation"> | string;
    professeurId?: Prisma.StringFilter<"Evaluation"> | string;
    matiere?: Prisma.XOR<Prisma.MatiereScalarRelationFilter, Prisma.MatiereWhereInput>;
    professeur?: Prisma.XOR<Prisma.ProfesseurScalarRelationFilter, Prisma.ProfesseurWhereInput>;
    notes?: Prisma.NoteListRelationFilter;
}, "id">;
export type EvaluationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    professeurId?: Prisma.SortOrder;
    _count?: Prisma.EvaluationCountOrderByAggregateInput;
    _max?: Prisma.EvaluationMaxOrderByAggregateInput;
    _min?: Prisma.EvaluationMinOrderByAggregateInput;
};
export type EvaluationScalarWhereWithAggregatesInput = {
    AND?: Prisma.EvaluationScalarWhereWithAggregatesInput | Prisma.EvaluationScalarWhereWithAggregatesInput[];
    OR?: Prisma.EvaluationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EvaluationScalarWhereWithAggregatesInput | Prisma.EvaluationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Evaluation"> | string;
    titre?: Prisma.StringWithAggregatesFilter<"Evaluation"> | string;
    type?: Prisma.EnumEvalTypeWithAggregatesFilter<"Evaluation"> | $Enums.EvalType;
    date?: Prisma.DateTimeWithAggregatesFilter<"Evaluation"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Evaluation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Evaluation"> | Date | string;
    matiereId?: Prisma.StringWithAggregatesFilter<"Evaluation"> | string;
    professeurId?: Prisma.StringWithAggregatesFilter<"Evaluation"> | string;
};
export type EvaluationCreateInput = {
    id?: string;
    titre: string;
    type: $Enums.EvalType;
    date: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matiere: Prisma.MatiereCreateNestedOneWithoutEvaluationsInput;
    professeur: Prisma.ProfesseurCreateNestedOneWithoutEvaluationsInput;
    notes?: Prisma.NoteCreateNestedManyWithoutEvaluationInput;
};
export type EvaluationUncheckedCreateInput = {
    id?: string;
    titre: string;
    type: $Enums.EvalType;
    date: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matiereId: string;
    professeurId: string;
    notes?: Prisma.NoteUncheckedCreateNestedManyWithoutEvaluationInput;
};
export type EvaluationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumEvalTypeFieldUpdateOperationsInput | $Enums.EvalType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matiere?: Prisma.MatiereUpdateOneRequiredWithoutEvaluationsNestedInput;
    professeur?: Prisma.ProfesseurUpdateOneRequiredWithoutEvaluationsNestedInput;
    notes?: Prisma.NoteUpdateManyWithoutEvaluationNestedInput;
};
export type EvaluationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumEvalTypeFieldUpdateOperationsInput | $Enums.EvalType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    professeurId?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NoteUncheckedUpdateManyWithoutEvaluationNestedInput;
};
export type EvaluationCreateManyInput = {
    id?: string;
    titre: string;
    type: $Enums.EvalType;
    date: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matiereId: string;
    professeurId: string;
};
export type EvaluationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumEvalTypeFieldUpdateOperationsInput | $Enums.EvalType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumEvalTypeFieldUpdateOperationsInput | $Enums.EvalType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    professeurId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EvaluationListRelationFilter = {
    every?: Prisma.EvaluationWhereInput;
    some?: Prisma.EvaluationWhereInput;
    none?: Prisma.EvaluationWhereInput;
};
export type EvaluationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EvaluationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    professeurId?: Prisma.SortOrder;
};
export type EvaluationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    professeurId?: Prisma.SortOrder;
};
export type EvaluationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    professeurId?: Prisma.SortOrder;
};
export type EvaluationScalarRelationFilter = {
    is?: Prisma.EvaluationWhereInput;
    isNot?: Prisma.EvaluationWhereInput;
};
export type EvaluationCreateNestedManyWithoutProfesseurInput = {
    create?: Prisma.XOR<Prisma.EvaluationCreateWithoutProfesseurInput, Prisma.EvaluationUncheckedCreateWithoutProfesseurInput> | Prisma.EvaluationCreateWithoutProfesseurInput[] | Prisma.EvaluationUncheckedCreateWithoutProfesseurInput[];
    connectOrCreate?: Prisma.EvaluationCreateOrConnectWithoutProfesseurInput | Prisma.EvaluationCreateOrConnectWithoutProfesseurInput[];
    createMany?: Prisma.EvaluationCreateManyProfesseurInputEnvelope;
    connect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
};
export type EvaluationUncheckedCreateNestedManyWithoutProfesseurInput = {
    create?: Prisma.XOR<Prisma.EvaluationCreateWithoutProfesseurInput, Prisma.EvaluationUncheckedCreateWithoutProfesseurInput> | Prisma.EvaluationCreateWithoutProfesseurInput[] | Prisma.EvaluationUncheckedCreateWithoutProfesseurInput[];
    connectOrCreate?: Prisma.EvaluationCreateOrConnectWithoutProfesseurInput | Prisma.EvaluationCreateOrConnectWithoutProfesseurInput[];
    createMany?: Prisma.EvaluationCreateManyProfesseurInputEnvelope;
    connect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
};
export type EvaluationUpdateManyWithoutProfesseurNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationCreateWithoutProfesseurInput, Prisma.EvaluationUncheckedCreateWithoutProfesseurInput> | Prisma.EvaluationCreateWithoutProfesseurInput[] | Prisma.EvaluationUncheckedCreateWithoutProfesseurInput[];
    connectOrCreate?: Prisma.EvaluationCreateOrConnectWithoutProfesseurInput | Prisma.EvaluationCreateOrConnectWithoutProfesseurInput[];
    upsert?: Prisma.EvaluationUpsertWithWhereUniqueWithoutProfesseurInput | Prisma.EvaluationUpsertWithWhereUniqueWithoutProfesseurInput[];
    createMany?: Prisma.EvaluationCreateManyProfesseurInputEnvelope;
    set?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    disconnect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    delete?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    connect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    update?: Prisma.EvaluationUpdateWithWhereUniqueWithoutProfesseurInput | Prisma.EvaluationUpdateWithWhereUniqueWithoutProfesseurInput[];
    updateMany?: Prisma.EvaluationUpdateManyWithWhereWithoutProfesseurInput | Prisma.EvaluationUpdateManyWithWhereWithoutProfesseurInput[];
    deleteMany?: Prisma.EvaluationScalarWhereInput | Prisma.EvaluationScalarWhereInput[];
};
export type EvaluationUncheckedUpdateManyWithoutProfesseurNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationCreateWithoutProfesseurInput, Prisma.EvaluationUncheckedCreateWithoutProfesseurInput> | Prisma.EvaluationCreateWithoutProfesseurInput[] | Prisma.EvaluationUncheckedCreateWithoutProfesseurInput[];
    connectOrCreate?: Prisma.EvaluationCreateOrConnectWithoutProfesseurInput | Prisma.EvaluationCreateOrConnectWithoutProfesseurInput[];
    upsert?: Prisma.EvaluationUpsertWithWhereUniqueWithoutProfesseurInput | Prisma.EvaluationUpsertWithWhereUniqueWithoutProfesseurInput[];
    createMany?: Prisma.EvaluationCreateManyProfesseurInputEnvelope;
    set?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    disconnect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    delete?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    connect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    update?: Prisma.EvaluationUpdateWithWhereUniqueWithoutProfesseurInput | Prisma.EvaluationUpdateWithWhereUniqueWithoutProfesseurInput[];
    updateMany?: Prisma.EvaluationUpdateManyWithWhereWithoutProfesseurInput | Prisma.EvaluationUpdateManyWithWhereWithoutProfesseurInput[];
    deleteMany?: Prisma.EvaluationScalarWhereInput | Prisma.EvaluationScalarWhereInput[];
};
export type EvaluationCreateNestedManyWithoutMatiereInput = {
    create?: Prisma.XOR<Prisma.EvaluationCreateWithoutMatiereInput, Prisma.EvaluationUncheckedCreateWithoutMatiereInput> | Prisma.EvaluationCreateWithoutMatiereInput[] | Prisma.EvaluationUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.EvaluationCreateOrConnectWithoutMatiereInput | Prisma.EvaluationCreateOrConnectWithoutMatiereInput[];
    createMany?: Prisma.EvaluationCreateManyMatiereInputEnvelope;
    connect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
};
export type EvaluationUncheckedCreateNestedManyWithoutMatiereInput = {
    create?: Prisma.XOR<Prisma.EvaluationCreateWithoutMatiereInput, Prisma.EvaluationUncheckedCreateWithoutMatiereInput> | Prisma.EvaluationCreateWithoutMatiereInput[] | Prisma.EvaluationUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.EvaluationCreateOrConnectWithoutMatiereInput | Prisma.EvaluationCreateOrConnectWithoutMatiereInput[];
    createMany?: Prisma.EvaluationCreateManyMatiereInputEnvelope;
    connect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
};
export type EvaluationUpdateManyWithoutMatiereNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationCreateWithoutMatiereInput, Prisma.EvaluationUncheckedCreateWithoutMatiereInput> | Prisma.EvaluationCreateWithoutMatiereInput[] | Prisma.EvaluationUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.EvaluationCreateOrConnectWithoutMatiereInput | Prisma.EvaluationCreateOrConnectWithoutMatiereInput[];
    upsert?: Prisma.EvaluationUpsertWithWhereUniqueWithoutMatiereInput | Prisma.EvaluationUpsertWithWhereUniqueWithoutMatiereInput[];
    createMany?: Prisma.EvaluationCreateManyMatiereInputEnvelope;
    set?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    disconnect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    delete?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    connect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    update?: Prisma.EvaluationUpdateWithWhereUniqueWithoutMatiereInput | Prisma.EvaluationUpdateWithWhereUniqueWithoutMatiereInput[];
    updateMany?: Prisma.EvaluationUpdateManyWithWhereWithoutMatiereInput | Prisma.EvaluationUpdateManyWithWhereWithoutMatiereInput[];
    deleteMany?: Prisma.EvaluationScalarWhereInput | Prisma.EvaluationScalarWhereInput[];
};
export type EvaluationUncheckedUpdateManyWithoutMatiereNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationCreateWithoutMatiereInput, Prisma.EvaluationUncheckedCreateWithoutMatiereInput> | Prisma.EvaluationCreateWithoutMatiereInput[] | Prisma.EvaluationUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.EvaluationCreateOrConnectWithoutMatiereInput | Prisma.EvaluationCreateOrConnectWithoutMatiereInput[];
    upsert?: Prisma.EvaluationUpsertWithWhereUniqueWithoutMatiereInput | Prisma.EvaluationUpsertWithWhereUniqueWithoutMatiereInput[];
    createMany?: Prisma.EvaluationCreateManyMatiereInputEnvelope;
    set?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    disconnect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    delete?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    connect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    update?: Prisma.EvaluationUpdateWithWhereUniqueWithoutMatiereInput | Prisma.EvaluationUpdateWithWhereUniqueWithoutMatiereInput[];
    updateMany?: Prisma.EvaluationUpdateManyWithWhereWithoutMatiereInput | Prisma.EvaluationUpdateManyWithWhereWithoutMatiereInput[];
    deleteMany?: Prisma.EvaluationScalarWhereInput | Prisma.EvaluationScalarWhereInput[];
};
export type EnumEvalTypeFieldUpdateOperationsInput = {
    set?: $Enums.EvalType;
};
export type EvaluationCreateNestedOneWithoutNotesInput = {
    create?: Prisma.XOR<Prisma.EvaluationCreateWithoutNotesInput, Prisma.EvaluationUncheckedCreateWithoutNotesInput>;
    connectOrCreate?: Prisma.EvaluationCreateOrConnectWithoutNotesInput;
    connect?: Prisma.EvaluationWhereUniqueInput;
};
export type EvaluationUpdateOneRequiredWithoutNotesNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationCreateWithoutNotesInput, Prisma.EvaluationUncheckedCreateWithoutNotesInput>;
    connectOrCreate?: Prisma.EvaluationCreateOrConnectWithoutNotesInput;
    upsert?: Prisma.EvaluationUpsertWithoutNotesInput;
    connect?: Prisma.EvaluationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EvaluationUpdateToOneWithWhereWithoutNotesInput, Prisma.EvaluationUpdateWithoutNotesInput>, Prisma.EvaluationUncheckedUpdateWithoutNotesInput>;
};
export type EvaluationCreateWithoutProfesseurInput = {
    id?: string;
    titre: string;
    type: $Enums.EvalType;
    date: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matiere: Prisma.MatiereCreateNestedOneWithoutEvaluationsInput;
    notes?: Prisma.NoteCreateNestedManyWithoutEvaluationInput;
};
export type EvaluationUncheckedCreateWithoutProfesseurInput = {
    id?: string;
    titre: string;
    type: $Enums.EvalType;
    date: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matiereId: string;
    notes?: Prisma.NoteUncheckedCreateNestedManyWithoutEvaluationInput;
};
export type EvaluationCreateOrConnectWithoutProfesseurInput = {
    where: Prisma.EvaluationWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationCreateWithoutProfesseurInput, Prisma.EvaluationUncheckedCreateWithoutProfesseurInput>;
};
export type EvaluationCreateManyProfesseurInputEnvelope = {
    data: Prisma.EvaluationCreateManyProfesseurInput | Prisma.EvaluationCreateManyProfesseurInput[];
};
export type EvaluationUpsertWithWhereUniqueWithoutProfesseurInput = {
    where: Prisma.EvaluationWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvaluationUpdateWithoutProfesseurInput, Prisma.EvaluationUncheckedUpdateWithoutProfesseurInput>;
    create: Prisma.XOR<Prisma.EvaluationCreateWithoutProfesseurInput, Prisma.EvaluationUncheckedCreateWithoutProfesseurInput>;
};
export type EvaluationUpdateWithWhereUniqueWithoutProfesseurInput = {
    where: Prisma.EvaluationWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvaluationUpdateWithoutProfesseurInput, Prisma.EvaluationUncheckedUpdateWithoutProfesseurInput>;
};
export type EvaluationUpdateManyWithWhereWithoutProfesseurInput = {
    where: Prisma.EvaluationScalarWhereInput;
    data: Prisma.XOR<Prisma.EvaluationUpdateManyMutationInput, Prisma.EvaluationUncheckedUpdateManyWithoutProfesseurInput>;
};
export type EvaluationScalarWhereInput = {
    AND?: Prisma.EvaluationScalarWhereInput | Prisma.EvaluationScalarWhereInput[];
    OR?: Prisma.EvaluationScalarWhereInput[];
    NOT?: Prisma.EvaluationScalarWhereInput | Prisma.EvaluationScalarWhereInput[];
    id?: Prisma.StringFilter<"Evaluation"> | string;
    titre?: Prisma.StringFilter<"Evaluation"> | string;
    type?: Prisma.EnumEvalTypeFilter<"Evaluation"> | $Enums.EvalType;
    date?: Prisma.DateTimeFilter<"Evaluation"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Evaluation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Evaluation"> | Date | string;
    matiereId?: Prisma.StringFilter<"Evaluation"> | string;
    professeurId?: Prisma.StringFilter<"Evaluation"> | string;
};
export type EvaluationCreateWithoutMatiereInput = {
    id?: string;
    titre: string;
    type: $Enums.EvalType;
    date: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    professeur: Prisma.ProfesseurCreateNestedOneWithoutEvaluationsInput;
    notes?: Prisma.NoteCreateNestedManyWithoutEvaluationInput;
};
export type EvaluationUncheckedCreateWithoutMatiereInput = {
    id?: string;
    titre: string;
    type: $Enums.EvalType;
    date: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    professeurId: string;
    notes?: Prisma.NoteUncheckedCreateNestedManyWithoutEvaluationInput;
};
export type EvaluationCreateOrConnectWithoutMatiereInput = {
    where: Prisma.EvaluationWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationCreateWithoutMatiereInput, Prisma.EvaluationUncheckedCreateWithoutMatiereInput>;
};
export type EvaluationCreateManyMatiereInputEnvelope = {
    data: Prisma.EvaluationCreateManyMatiereInput | Prisma.EvaluationCreateManyMatiereInput[];
};
export type EvaluationUpsertWithWhereUniqueWithoutMatiereInput = {
    where: Prisma.EvaluationWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvaluationUpdateWithoutMatiereInput, Prisma.EvaluationUncheckedUpdateWithoutMatiereInput>;
    create: Prisma.XOR<Prisma.EvaluationCreateWithoutMatiereInput, Prisma.EvaluationUncheckedCreateWithoutMatiereInput>;
};
export type EvaluationUpdateWithWhereUniqueWithoutMatiereInput = {
    where: Prisma.EvaluationWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvaluationUpdateWithoutMatiereInput, Prisma.EvaluationUncheckedUpdateWithoutMatiereInput>;
};
export type EvaluationUpdateManyWithWhereWithoutMatiereInput = {
    where: Prisma.EvaluationScalarWhereInput;
    data: Prisma.XOR<Prisma.EvaluationUpdateManyMutationInput, Prisma.EvaluationUncheckedUpdateManyWithoutMatiereInput>;
};
export type EvaluationCreateWithoutNotesInput = {
    id?: string;
    titre: string;
    type: $Enums.EvalType;
    date: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matiere: Prisma.MatiereCreateNestedOneWithoutEvaluationsInput;
    professeur: Prisma.ProfesseurCreateNestedOneWithoutEvaluationsInput;
};
export type EvaluationUncheckedCreateWithoutNotesInput = {
    id?: string;
    titre: string;
    type: $Enums.EvalType;
    date: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matiereId: string;
    professeurId: string;
};
export type EvaluationCreateOrConnectWithoutNotesInput = {
    where: Prisma.EvaluationWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationCreateWithoutNotesInput, Prisma.EvaluationUncheckedCreateWithoutNotesInput>;
};
export type EvaluationUpsertWithoutNotesInput = {
    update: Prisma.XOR<Prisma.EvaluationUpdateWithoutNotesInput, Prisma.EvaluationUncheckedUpdateWithoutNotesInput>;
    create: Prisma.XOR<Prisma.EvaluationCreateWithoutNotesInput, Prisma.EvaluationUncheckedCreateWithoutNotesInput>;
    where?: Prisma.EvaluationWhereInput;
};
export type EvaluationUpdateToOneWithWhereWithoutNotesInput = {
    where?: Prisma.EvaluationWhereInput;
    data: Prisma.XOR<Prisma.EvaluationUpdateWithoutNotesInput, Prisma.EvaluationUncheckedUpdateWithoutNotesInput>;
};
export type EvaluationUpdateWithoutNotesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumEvalTypeFieldUpdateOperationsInput | $Enums.EvalType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matiere?: Prisma.MatiereUpdateOneRequiredWithoutEvaluationsNestedInput;
    professeur?: Prisma.ProfesseurUpdateOneRequiredWithoutEvaluationsNestedInput;
};
export type EvaluationUncheckedUpdateWithoutNotesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumEvalTypeFieldUpdateOperationsInput | $Enums.EvalType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    professeurId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EvaluationCreateManyProfesseurInput = {
    id?: string;
    titre: string;
    type: $Enums.EvalType;
    date: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matiereId: string;
};
export type EvaluationUpdateWithoutProfesseurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumEvalTypeFieldUpdateOperationsInput | $Enums.EvalType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matiere?: Prisma.MatiereUpdateOneRequiredWithoutEvaluationsNestedInput;
    notes?: Prisma.NoteUpdateManyWithoutEvaluationNestedInput;
};
export type EvaluationUncheckedUpdateWithoutProfesseurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumEvalTypeFieldUpdateOperationsInput | $Enums.EvalType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NoteUncheckedUpdateManyWithoutEvaluationNestedInput;
};
export type EvaluationUncheckedUpdateManyWithoutProfesseurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumEvalTypeFieldUpdateOperationsInput | $Enums.EvalType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EvaluationCreateManyMatiereInput = {
    id?: string;
    titre: string;
    type: $Enums.EvalType;
    date: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    professeurId: string;
};
export type EvaluationUpdateWithoutMatiereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumEvalTypeFieldUpdateOperationsInput | $Enums.EvalType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    professeur?: Prisma.ProfesseurUpdateOneRequiredWithoutEvaluationsNestedInput;
    notes?: Prisma.NoteUpdateManyWithoutEvaluationNestedInput;
};
export type EvaluationUncheckedUpdateWithoutMatiereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumEvalTypeFieldUpdateOperationsInput | $Enums.EvalType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    professeurId?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NoteUncheckedUpdateManyWithoutEvaluationNestedInput;
};
export type EvaluationUncheckedUpdateManyWithoutMatiereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumEvalTypeFieldUpdateOperationsInput | $Enums.EvalType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    professeurId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EvaluationCountOutputType = {
    notes: number;
};
export type EvaluationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    notes?: boolean | EvaluationCountOutputTypeCountNotesArgs;
};
export type EvaluationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationCountOutputTypeSelect<ExtArgs> | null;
};
export type EvaluationCountOutputTypeCountNotesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NoteWhereInput;
};
export type EvaluationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titre?: boolean;
    type?: boolean;
    date?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    matiereId?: boolean;
    professeurId?: boolean;
    matiere?: boolean | Prisma.MatiereDefaultArgs<ExtArgs>;
    professeur?: boolean | Prisma.ProfesseurDefaultArgs<ExtArgs>;
    notes?: boolean | Prisma.Evaluation$notesArgs<ExtArgs>;
    _count?: boolean | Prisma.EvaluationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluation"]>;
export type EvaluationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titre?: boolean;
    type?: boolean;
    date?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    matiereId?: boolean;
    professeurId?: boolean;
    matiere?: boolean | Prisma.MatiereDefaultArgs<ExtArgs>;
    professeur?: boolean | Prisma.ProfesseurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluation"]>;
export type EvaluationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titre?: boolean;
    type?: boolean;
    date?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    matiereId?: boolean;
    professeurId?: boolean;
    matiere?: boolean | Prisma.MatiereDefaultArgs<ExtArgs>;
    professeur?: boolean | Prisma.ProfesseurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluation"]>;
export type EvaluationSelectScalar = {
    id?: boolean;
    titre?: boolean;
    type?: boolean;
    date?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    matiereId?: boolean;
    professeurId?: boolean;
};
export type EvaluationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "titre" | "type" | "date" | "createdAt" | "updatedAt" | "matiereId" | "professeurId", ExtArgs["result"]["evaluation"]>;
export type EvaluationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    matiere?: boolean | Prisma.MatiereDefaultArgs<ExtArgs>;
    professeur?: boolean | Prisma.ProfesseurDefaultArgs<ExtArgs>;
    notes?: boolean | Prisma.Evaluation$notesArgs<ExtArgs>;
    _count?: boolean | Prisma.EvaluationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EvaluationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    matiere?: boolean | Prisma.MatiereDefaultArgs<ExtArgs>;
    professeur?: boolean | Prisma.ProfesseurDefaultArgs<ExtArgs>;
};
export type EvaluationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    matiere?: boolean | Prisma.MatiereDefaultArgs<ExtArgs>;
    professeur?: boolean | Prisma.ProfesseurDefaultArgs<ExtArgs>;
};
export type $EvaluationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Evaluation";
    objects: {
        matiere: Prisma.$MatierePayload<ExtArgs>;
        professeur: Prisma.$ProfesseurPayload<ExtArgs>;
        notes: Prisma.$NotePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        titre: string;
        type: $Enums.EvalType;
        date: Date;
        createdAt: Date;
        updatedAt: Date;
        matiereId: string;
        professeurId: string;
    }, ExtArgs["result"]["evaluation"]>;
    composites: {};
};
export type EvaluationGetPayload<S extends boolean | null | undefined | EvaluationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EvaluationPayload, S>;
export type EvaluationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EvaluationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EvaluationCountAggregateInputType | true;
};
export interface EvaluationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Evaluation'];
        meta: {
            name: 'Evaluation';
        };
    };
    findUnique<T extends EvaluationFindUniqueArgs>(args: Prisma.SelectSubset<T, EvaluationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EvaluationClient<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EvaluationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EvaluationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvaluationClient<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EvaluationFindFirstArgs>(args?: Prisma.SelectSubset<T, EvaluationFindFirstArgs<ExtArgs>>): Prisma.Prisma__EvaluationClient<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EvaluationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EvaluationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvaluationClient<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EvaluationFindManyArgs>(args?: Prisma.SelectSubset<T, EvaluationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EvaluationCreateArgs>(args: Prisma.SelectSubset<T, EvaluationCreateArgs<ExtArgs>>): Prisma.Prisma__EvaluationClient<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EvaluationCreateManyArgs>(args?: Prisma.SelectSubset<T, EvaluationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EvaluationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EvaluationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EvaluationDeleteArgs>(args: Prisma.SelectSubset<T, EvaluationDeleteArgs<ExtArgs>>): Prisma.Prisma__EvaluationClient<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EvaluationUpdateArgs>(args: Prisma.SelectSubset<T, EvaluationUpdateArgs<ExtArgs>>): Prisma.Prisma__EvaluationClient<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EvaluationDeleteManyArgs>(args?: Prisma.SelectSubset<T, EvaluationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EvaluationUpdateManyArgs>(args: Prisma.SelectSubset<T, EvaluationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EvaluationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EvaluationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EvaluationUpsertArgs>(args: Prisma.SelectSubset<T, EvaluationUpsertArgs<ExtArgs>>): Prisma.Prisma__EvaluationClient<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EvaluationCountArgs>(args?: Prisma.Subset<T, EvaluationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EvaluationCountAggregateOutputType> : number>;
    aggregate<T extends EvaluationAggregateArgs>(args: Prisma.Subset<T, EvaluationAggregateArgs>): Prisma.PrismaPromise<GetEvaluationAggregateType<T>>;
    groupBy<T extends EvaluationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EvaluationGroupByArgs['orderBy'];
    } : {
        orderBy?: EvaluationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EvaluationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EvaluationFieldRefs;
}
export interface Prisma__EvaluationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    matiere<T extends Prisma.MatiereDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MatiereDefaultArgs<ExtArgs>>): Prisma.Prisma__MatiereClient<runtime.Types.Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    professeur<T extends Prisma.ProfesseurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfesseurDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfesseurClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    notes<T extends Prisma.Evaluation$notesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Evaluation$notesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EvaluationFieldRefs {
    readonly id: Prisma.FieldRef<"Evaluation", 'String'>;
    readonly titre: Prisma.FieldRef<"Evaluation", 'String'>;
    readonly type: Prisma.FieldRef<"Evaluation", 'EvalType'>;
    readonly date: Prisma.FieldRef<"Evaluation", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Evaluation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Evaluation", 'DateTime'>;
    readonly matiereId: Prisma.FieldRef<"Evaluation", 'String'>;
    readonly professeurId: Prisma.FieldRef<"Evaluation", 'String'>;
}
export type EvaluationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    include?: Prisma.EvaluationInclude<ExtArgs> | null;
    where: Prisma.EvaluationWhereUniqueInput;
};
export type EvaluationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    include?: Prisma.EvaluationInclude<ExtArgs> | null;
    where: Prisma.EvaluationWhereUniqueInput;
};
export type EvaluationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    include?: Prisma.EvaluationInclude<ExtArgs> | null;
    where?: Prisma.EvaluationWhereInput;
    orderBy?: Prisma.EvaluationOrderByWithRelationInput | Prisma.EvaluationOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EvaluationScalarFieldEnum | Prisma.EvaluationScalarFieldEnum[];
};
export type EvaluationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    include?: Prisma.EvaluationInclude<ExtArgs> | null;
    where?: Prisma.EvaluationWhereInput;
    orderBy?: Prisma.EvaluationOrderByWithRelationInput | Prisma.EvaluationOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EvaluationScalarFieldEnum | Prisma.EvaluationScalarFieldEnum[];
};
export type EvaluationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    include?: Prisma.EvaluationInclude<ExtArgs> | null;
    where?: Prisma.EvaluationWhereInput;
    orderBy?: Prisma.EvaluationOrderByWithRelationInput | Prisma.EvaluationOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EvaluationScalarFieldEnum | Prisma.EvaluationScalarFieldEnum[];
};
export type EvaluationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    include?: Prisma.EvaluationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationCreateInput, Prisma.EvaluationUncheckedCreateInput>;
};
export type EvaluationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EvaluationCreateManyInput | Prisma.EvaluationCreateManyInput[];
};
export type EvaluationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    data: Prisma.EvaluationCreateManyInput | Prisma.EvaluationCreateManyInput[];
    include?: Prisma.EvaluationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EvaluationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    include?: Prisma.EvaluationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationUpdateInput, Prisma.EvaluationUncheckedUpdateInput>;
    where: Prisma.EvaluationWhereUniqueInput;
};
export type EvaluationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EvaluationUpdateManyMutationInput, Prisma.EvaluationUncheckedUpdateManyInput>;
    where?: Prisma.EvaluationWhereInput;
    limit?: number;
};
export type EvaluationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationUpdateManyMutationInput, Prisma.EvaluationUncheckedUpdateManyInput>;
    where?: Prisma.EvaluationWhereInput;
    limit?: number;
    include?: Prisma.EvaluationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EvaluationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    include?: Prisma.EvaluationInclude<ExtArgs> | null;
    where: Prisma.EvaluationWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationCreateInput, Prisma.EvaluationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EvaluationUpdateInput, Prisma.EvaluationUncheckedUpdateInput>;
};
export type EvaluationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    include?: Prisma.EvaluationInclude<ExtArgs> | null;
    where: Prisma.EvaluationWhereUniqueInput;
};
export type EvaluationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationWhereInput;
    limit?: number;
};
export type Evaluation$notesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EvaluationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    include?: Prisma.EvaluationInclude<ExtArgs> | null;
};

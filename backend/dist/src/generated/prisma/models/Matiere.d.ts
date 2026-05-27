import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MatiereModel = runtime.Types.Result.DefaultSelection<Prisma.$MatierePayload>;
export type AggregateMatiere = {
    _count: MatiereCountAggregateOutputType | null;
    _avg: MatiereAvgAggregateOutputType | null;
    _sum: MatiereSumAggregateOutputType | null;
    _min: MatiereMinAggregateOutputType | null;
    _max: MatiereMaxAggregateOutputType | null;
};
export type MatiereAvgAggregateOutputType = {
    coefficient: number | null;
};
export type MatiereSumAggregateOutputType = {
    coefficient: number | null;
};
export type MatiereMinAggregateOutputType = {
    id: string | null;
    nom: string | null;
    coefficient: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    classeId: string | null;
};
export type MatiereMaxAggregateOutputType = {
    id: string | null;
    nom: string | null;
    coefficient: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    classeId: string | null;
};
export type MatiereCountAggregateOutputType = {
    id: number;
    nom: number;
    coefficient: number;
    createdAt: number;
    updatedAt: number;
    classeId: number;
    _all: number;
};
export type MatiereAvgAggregateInputType = {
    coefficient?: true;
};
export type MatiereSumAggregateInputType = {
    coefficient?: true;
};
export type MatiereMinAggregateInputType = {
    id?: true;
    nom?: true;
    coefficient?: true;
    createdAt?: true;
    updatedAt?: true;
    classeId?: true;
};
export type MatiereMaxAggregateInputType = {
    id?: true;
    nom?: true;
    coefficient?: true;
    createdAt?: true;
    updatedAt?: true;
    classeId?: true;
};
export type MatiereCountAggregateInputType = {
    id?: true;
    nom?: true;
    coefficient?: true;
    createdAt?: true;
    updatedAt?: true;
    classeId?: true;
    _all?: true;
};
export type MatiereAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatiereWhereInput;
    orderBy?: Prisma.MatiereOrderByWithRelationInput | Prisma.MatiereOrderByWithRelationInput[];
    cursor?: Prisma.MatiereWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MatiereCountAggregateInputType;
    _avg?: MatiereAvgAggregateInputType;
    _sum?: MatiereSumAggregateInputType;
    _min?: MatiereMinAggregateInputType;
    _max?: MatiereMaxAggregateInputType;
};
export type GetMatiereAggregateType<T extends MatiereAggregateArgs> = {
    [P in keyof T & keyof AggregateMatiere]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMatiere[P]> : Prisma.GetScalarType<T[P], AggregateMatiere[P]>;
};
export type MatiereGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatiereWhereInput;
    orderBy?: Prisma.MatiereOrderByWithAggregationInput | Prisma.MatiereOrderByWithAggregationInput[];
    by: Prisma.MatiereScalarFieldEnum[] | Prisma.MatiereScalarFieldEnum;
    having?: Prisma.MatiereScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MatiereCountAggregateInputType | true;
    _avg?: MatiereAvgAggregateInputType;
    _sum?: MatiereSumAggregateInputType;
    _min?: MatiereMinAggregateInputType;
    _max?: MatiereMaxAggregateInputType;
};
export type MatiereGroupByOutputType = {
    id: string;
    nom: string;
    coefficient: number;
    createdAt: Date;
    updatedAt: Date;
    classeId: string;
    _count: MatiereCountAggregateOutputType | null;
    _avg: MatiereAvgAggregateOutputType | null;
    _sum: MatiereSumAggregateOutputType | null;
    _min: MatiereMinAggregateOutputType | null;
    _max: MatiereMaxAggregateOutputType | null;
};
export type GetMatiereGroupByPayload<T extends MatiereGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MatiereGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MatiereGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MatiereGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MatiereGroupByOutputType[P]>;
}>>;
export type MatiereWhereInput = {
    AND?: Prisma.MatiereWhereInput | Prisma.MatiereWhereInput[];
    OR?: Prisma.MatiereWhereInput[];
    NOT?: Prisma.MatiereWhereInput | Prisma.MatiereWhereInput[];
    id?: Prisma.StringFilter<"Matiere"> | string;
    nom?: Prisma.StringFilter<"Matiere"> | string;
    coefficient?: Prisma.IntFilter<"Matiere"> | number;
    createdAt?: Prisma.DateTimeFilter<"Matiere"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Matiere"> | Date | string;
    classeId?: Prisma.StringFilter<"Matiere"> | string;
    classe?: Prisma.XOR<Prisma.ClasseScalarRelationFilter, Prisma.ClasseWhereInput>;
    professeurs?: Prisma.ProfesseurMatiereListRelationFilter;
    evaluations?: Prisma.EvaluationListRelationFilter;
};
export type MatiereOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    coefficient?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
    classe?: Prisma.ClasseOrderByWithRelationInput;
    professeurs?: Prisma.ProfesseurMatiereOrderByRelationAggregateInput;
    evaluations?: Prisma.EvaluationOrderByRelationAggregateInput;
};
export type MatiereWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MatiereWhereInput | Prisma.MatiereWhereInput[];
    OR?: Prisma.MatiereWhereInput[];
    NOT?: Prisma.MatiereWhereInput | Prisma.MatiereWhereInput[];
    nom?: Prisma.StringFilter<"Matiere"> | string;
    coefficient?: Prisma.IntFilter<"Matiere"> | number;
    createdAt?: Prisma.DateTimeFilter<"Matiere"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Matiere"> | Date | string;
    classeId?: Prisma.StringFilter<"Matiere"> | string;
    classe?: Prisma.XOR<Prisma.ClasseScalarRelationFilter, Prisma.ClasseWhereInput>;
    professeurs?: Prisma.ProfesseurMatiereListRelationFilter;
    evaluations?: Prisma.EvaluationListRelationFilter;
}, "id">;
export type MatiereOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    coefficient?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
    _count?: Prisma.MatiereCountOrderByAggregateInput;
    _avg?: Prisma.MatiereAvgOrderByAggregateInput;
    _max?: Prisma.MatiereMaxOrderByAggregateInput;
    _min?: Prisma.MatiereMinOrderByAggregateInput;
    _sum?: Prisma.MatiereSumOrderByAggregateInput;
};
export type MatiereScalarWhereWithAggregatesInput = {
    AND?: Prisma.MatiereScalarWhereWithAggregatesInput | Prisma.MatiereScalarWhereWithAggregatesInput[];
    OR?: Prisma.MatiereScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MatiereScalarWhereWithAggregatesInput | Prisma.MatiereScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Matiere"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"Matiere"> | string;
    coefficient?: Prisma.IntWithAggregatesFilter<"Matiere"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Matiere"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Matiere"> | Date | string;
    classeId?: Prisma.StringWithAggregatesFilter<"Matiere"> | string;
};
export type MatiereCreateInput = {
    id?: string;
    nom: string;
    coefficient?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classe: Prisma.ClasseCreateNestedOneWithoutMatieresInput;
    professeurs?: Prisma.ProfesseurMatiereCreateNestedManyWithoutMatiereInput;
    evaluations?: Prisma.EvaluationCreateNestedManyWithoutMatiereInput;
};
export type MatiereUncheckedCreateInput = {
    id?: string;
    nom: string;
    coefficient?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classeId: string;
    professeurs?: Prisma.ProfesseurMatiereUncheckedCreateNestedManyWithoutMatiereInput;
    evaluations?: Prisma.EvaluationUncheckedCreateNestedManyWithoutMatiereInput;
};
export type MatiereUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    coefficient?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classe?: Prisma.ClasseUpdateOneRequiredWithoutMatieresNestedInput;
    professeurs?: Prisma.ProfesseurMatiereUpdateManyWithoutMatiereNestedInput;
    evaluations?: Prisma.EvaluationUpdateManyWithoutMatiereNestedInput;
};
export type MatiereUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    coefficient?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classeId?: Prisma.StringFieldUpdateOperationsInput | string;
    professeurs?: Prisma.ProfesseurMatiereUncheckedUpdateManyWithoutMatiereNestedInput;
    evaluations?: Prisma.EvaluationUncheckedUpdateManyWithoutMatiereNestedInput;
};
export type MatiereCreateManyInput = {
    id?: string;
    nom: string;
    coefficient?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classeId: string;
};
export type MatiereUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    coefficient?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatiereUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    coefficient?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classeId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MatiereListRelationFilter = {
    every?: Prisma.MatiereWhereInput;
    some?: Prisma.MatiereWhereInput;
    none?: Prisma.MatiereWhereInput;
};
export type MatiereOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MatiereCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    coefficient?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
};
export type MatiereAvgOrderByAggregateInput = {
    coefficient?: Prisma.SortOrder;
};
export type MatiereMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    coefficient?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
};
export type MatiereMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    coefficient?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
};
export type MatiereSumOrderByAggregateInput = {
    coefficient?: Prisma.SortOrder;
};
export type MatiereScalarRelationFilter = {
    is?: Prisma.MatiereWhereInput;
    isNot?: Prisma.MatiereWhereInput;
};
export type MatiereCreateNestedManyWithoutClasseInput = {
    create?: Prisma.XOR<Prisma.MatiereCreateWithoutClasseInput, Prisma.MatiereUncheckedCreateWithoutClasseInput> | Prisma.MatiereCreateWithoutClasseInput[] | Prisma.MatiereUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.MatiereCreateOrConnectWithoutClasseInput | Prisma.MatiereCreateOrConnectWithoutClasseInput[];
    createMany?: Prisma.MatiereCreateManyClasseInputEnvelope;
    connect?: Prisma.MatiereWhereUniqueInput | Prisma.MatiereWhereUniqueInput[];
};
export type MatiereUncheckedCreateNestedManyWithoutClasseInput = {
    create?: Prisma.XOR<Prisma.MatiereCreateWithoutClasseInput, Prisma.MatiereUncheckedCreateWithoutClasseInput> | Prisma.MatiereCreateWithoutClasseInput[] | Prisma.MatiereUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.MatiereCreateOrConnectWithoutClasseInput | Prisma.MatiereCreateOrConnectWithoutClasseInput[];
    createMany?: Prisma.MatiereCreateManyClasseInputEnvelope;
    connect?: Prisma.MatiereWhereUniqueInput | Prisma.MatiereWhereUniqueInput[];
};
export type MatiereUpdateManyWithoutClasseNestedInput = {
    create?: Prisma.XOR<Prisma.MatiereCreateWithoutClasseInput, Prisma.MatiereUncheckedCreateWithoutClasseInput> | Prisma.MatiereCreateWithoutClasseInput[] | Prisma.MatiereUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.MatiereCreateOrConnectWithoutClasseInput | Prisma.MatiereCreateOrConnectWithoutClasseInput[];
    upsert?: Prisma.MatiereUpsertWithWhereUniqueWithoutClasseInput | Prisma.MatiereUpsertWithWhereUniqueWithoutClasseInput[];
    createMany?: Prisma.MatiereCreateManyClasseInputEnvelope;
    set?: Prisma.MatiereWhereUniqueInput | Prisma.MatiereWhereUniqueInput[];
    disconnect?: Prisma.MatiereWhereUniqueInput | Prisma.MatiereWhereUniqueInput[];
    delete?: Prisma.MatiereWhereUniqueInput | Prisma.MatiereWhereUniqueInput[];
    connect?: Prisma.MatiereWhereUniqueInput | Prisma.MatiereWhereUniqueInput[];
    update?: Prisma.MatiereUpdateWithWhereUniqueWithoutClasseInput | Prisma.MatiereUpdateWithWhereUniqueWithoutClasseInput[];
    updateMany?: Prisma.MatiereUpdateManyWithWhereWithoutClasseInput | Prisma.MatiereUpdateManyWithWhereWithoutClasseInput[];
    deleteMany?: Prisma.MatiereScalarWhereInput | Prisma.MatiereScalarWhereInput[];
};
export type MatiereUncheckedUpdateManyWithoutClasseNestedInput = {
    create?: Prisma.XOR<Prisma.MatiereCreateWithoutClasseInput, Prisma.MatiereUncheckedCreateWithoutClasseInput> | Prisma.MatiereCreateWithoutClasseInput[] | Prisma.MatiereUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.MatiereCreateOrConnectWithoutClasseInput | Prisma.MatiereCreateOrConnectWithoutClasseInput[];
    upsert?: Prisma.MatiereUpsertWithWhereUniqueWithoutClasseInput | Prisma.MatiereUpsertWithWhereUniqueWithoutClasseInput[];
    createMany?: Prisma.MatiereCreateManyClasseInputEnvelope;
    set?: Prisma.MatiereWhereUniqueInput | Prisma.MatiereWhereUniqueInput[];
    disconnect?: Prisma.MatiereWhereUniqueInput | Prisma.MatiereWhereUniqueInput[];
    delete?: Prisma.MatiereWhereUniqueInput | Prisma.MatiereWhereUniqueInput[];
    connect?: Prisma.MatiereWhereUniqueInput | Prisma.MatiereWhereUniqueInput[];
    update?: Prisma.MatiereUpdateWithWhereUniqueWithoutClasseInput | Prisma.MatiereUpdateWithWhereUniqueWithoutClasseInput[];
    updateMany?: Prisma.MatiereUpdateManyWithWhereWithoutClasseInput | Prisma.MatiereUpdateManyWithWhereWithoutClasseInput[];
    deleteMany?: Prisma.MatiereScalarWhereInput | Prisma.MatiereScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type MatiereCreateNestedOneWithoutProfesseursInput = {
    create?: Prisma.XOR<Prisma.MatiereCreateWithoutProfesseursInput, Prisma.MatiereUncheckedCreateWithoutProfesseursInput>;
    connectOrCreate?: Prisma.MatiereCreateOrConnectWithoutProfesseursInput;
    connect?: Prisma.MatiereWhereUniqueInput;
};
export type MatiereUpdateOneRequiredWithoutProfesseursNestedInput = {
    create?: Prisma.XOR<Prisma.MatiereCreateWithoutProfesseursInput, Prisma.MatiereUncheckedCreateWithoutProfesseursInput>;
    connectOrCreate?: Prisma.MatiereCreateOrConnectWithoutProfesseursInput;
    upsert?: Prisma.MatiereUpsertWithoutProfesseursInput;
    connect?: Prisma.MatiereWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MatiereUpdateToOneWithWhereWithoutProfesseursInput, Prisma.MatiereUpdateWithoutProfesseursInput>, Prisma.MatiereUncheckedUpdateWithoutProfesseursInput>;
};
export type MatiereCreateNestedOneWithoutEvaluationsInput = {
    create?: Prisma.XOR<Prisma.MatiereCreateWithoutEvaluationsInput, Prisma.MatiereUncheckedCreateWithoutEvaluationsInput>;
    connectOrCreate?: Prisma.MatiereCreateOrConnectWithoutEvaluationsInput;
    connect?: Prisma.MatiereWhereUniqueInput;
};
export type MatiereUpdateOneRequiredWithoutEvaluationsNestedInput = {
    create?: Prisma.XOR<Prisma.MatiereCreateWithoutEvaluationsInput, Prisma.MatiereUncheckedCreateWithoutEvaluationsInput>;
    connectOrCreate?: Prisma.MatiereCreateOrConnectWithoutEvaluationsInput;
    upsert?: Prisma.MatiereUpsertWithoutEvaluationsInput;
    connect?: Prisma.MatiereWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MatiereUpdateToOneWithWhereWithoutEvaluationsInput, Prisma.MatiereUpdateWithoutEvaluationsInput>, Prisma.MatiereUncheckedUpdateWithoutEvaluationsInput>;
};
export type MatiereCreateWithoutClasseInput = {
    id?: string;
    nom: string;
    coefficient?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    professeurs?: Prisma.ProfesseurMatiereCreateNestedManyWithoutMatiereInput;
    evaluations?: Prisma.EvaluationCreateNestedManyWithoutMatiereInput;
};
export type MatiereUncheckedCreateWithoutClasseInput = {
    id?: string;
    nom: string;
    coefficient?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    professeurs?: Prisma.ProfesseurMatiereUncheckedCreateNestedManyWithoutMatiereInput;
    evaluations?: Prisma.EvaluationUncheckedCreateNestedManyWithoutMatiereInput;
};
export type MatiereCreateOrConnectWithoutClasseInput = {
    where: Prisma.MatiereWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatiereCreateWithoutClasseInput, Prisma.MatiereUncheckedCreateWithoutClasseInput>;
};
export type MatiereCreateManyClasseInputEnvelope = {
    data: Prisma.MatiereCreateManyClasseInput | Prisma.MatiereCreateManyClasseInput[];
};
export type MatiereUpsertWithWhereUniqueWithoutClasseInput = {
    where: Prisma.MatiereWhereUniqueInput;
    update: Prisma.XOR<Prisma.MatiereUpdateWithoutClasseInput, Prisma.MatiereUncheckedUpdateWithoutClasseInput>;
    create: Prisma.XOR<Prisma.MatiereCreateWithoutClasseInput, Prisma.MatiereUncheckedCreateWithoutClasseInput>;
};
export type MatiereUpdateWithWhereUniqueWithoutClasseInput = {
    where: Prisma.MatiereWhereUniqueInput;
    data: Prisma.XOR<Prisma.MatiereUpdateWithoutClasseInput, Prisma.MatiereUncheckedUpdateWithoutClasseInput>;
};
export type MatiereUpdateManyWithWhereWithoutClasseInput = {
    where: Prisma.MatiereScalarWhereInput;
    data: Prisma.XOR<Prisma.MatiereUpdateManyMutationInput, Prisma.MatiereUncheckedUpdateManyWithoutClasseInput>;
};
export type MatiereScalarWhereInput = {
    AND?: Prisma.MatiereScalarWhereInput | Prisma.MatiereScalarWhereInput[];
    OR?: Prisma.MatiereScalarWhereInput[];
    NOT?: Prisma.MatiereScalarWhereInput | Prisma.MatiereScalarWhereInput[];
    id?: Prisma.StringFilter<"Matiere"> | string;
    nom?: Prisma.StringFilter<"Matiere"> | string;
    coefficient?: Prisma.IntFilter<"Matiere"> | number;
    createdAt?: Prisma.DateTimeFilter<"Matiere"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Matiere"> | Date | string;
    classeId?: Prisma.StringFilter<"Matiere"> | string;
};
export type MatiereCreateWithoutProfesseursInput = {
    id?: string;
    nom: string;
    coefficient?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classe: Prisma.ClasseCreateNestedOneWithoutMatieresInput;
    evaluations?: Prisma.EvaluationCreateNestedManyWithoutMatiereInput;
};
export type MatiereUncheckedCreateWithoutProfesseursInput = {
    id?: string;
    nom: string;
    coefficient?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classeId: string;
    evaluations?: Prisma.EvaluationUncheckedCreateNestedManyWithoutMatiereInput;
};
export type MatiereCreateOrConnectWithoutProfesseursInput = {
    where: Prisma.MatiereWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatiereCreateWithoutProfesseursInput, Prisma.MatiereUncheckedCreateWithoutProfesseursInput>;
};
export type MatiereUpsertWithoutProfesseursInput = {
    update: Prisma.XOR<Prisma.MatiereUpdateWithoutProfesseursInput, Prisma.MatiereUncheckedUpdateWithoutProfesseursInput>;
    create: Prisma.XOR<Prisma.MatiereCreateWithoutProfesseursInput, Prisma.MatiereUncheckedCreateWithoutProfesseursInput>;
    where?: Prisma.MatiereWhereInput;
};
export type MatiereUpdateToOneWithWhereWithoutProfesseursInput = {
    where?: Prisma.MatiereWhereInput;
    data: Prisma.XOR<Prisma.MatiereUpdateWithoutProfesseursInput, Prisma.MatiereUncheckedUpdateWithoutProfesseursInput>;
};
export type MatiereUpdateWithoutProfesseursInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    coefficient?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classe?: Prisma.ClasseUpdateOneRequiredWithoutMatieresNestedInput;
    evaluations?: Prisma.EvaluationUpdateManyWithoutMatiereNestedInput;
};
export type MatiereUncheckedUpdateWithoutProfesseursInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    coefficient?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classeId?: Prisma.StringFieldUpdateOperationsInput | string;
    evaluations?: Prisma.EvaluationUncheckedUpdateManyWithoutMatiereNestedInput;
};
export type MatiereCreateWithoutEvaluationsInput = {
    id?: string;
    nom: string;
    coefficient?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classe: Prisma.ClasseCreateNestedOneWithoutMatieresInput;
    professeurs?: Prisma.ProfesseurMatiereCreateNestedManyWithoutMatiereInput;
};
export type MatiereUncheckedCreateWithoutEvaluationsInput = {
    id?: string;
    nom: string;
    coefficient?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classeId: string;
    professeurs?: Prisma.ProfesseurMatiereUncheckedCreateNestedManyWithoutMatiereInput;
};
export type MatiereCreateOrConnectWithoutEvaluationsInput = {
    where: Prisma.MatiereWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatiereCreateWithoutEvaluationsInput, Prisma.MatiereUncheckedCreateWithoutEvaluationsInput>;
};
export type MatiereUpsertWithoutEvaluationsInput = {
    update: Prisma.XOR<Prisma.MatiereUpdateWithoutEvaluationsInput, Prisma.MatiereUncheckedUpdateWithoutEvaluationsInput>;
    create: Prisma.XOR<Prisma.MatiereCreateWithoutEvaluationsInput, Prisma.MatiereUncheckedCreateWithoutEvaluationsInput>;
    where?: Prisma.MatiereWhereInput;
};
export type MatiereUpdateToOneWithWhereWithoutEvaluationsInput = {
    where?: Prisma.MatiereWhereInput;
    data: Prisma.XOR<Prisma.MatiereUpdateWithoutEvaluationsInput, Prisma.MatiereUncheckedUpdateWithoutEvaluationsInput>;
};
export type MatiereUpdateWithoutEvaluationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    coefficient?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classe?: Prisma.ClasseUpdateOneRequiredWithoutMatieresNestedInput;
    professeurs?: Prisma.ProfesseurMatiereUpdateManyWithoutMatiereNestedInput;
};
export type MatiereUncheckedUpdateWithoutEvaluationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    coefficient?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classeId?: Prisma.StringFieldUpdateOperationsInput | string;
    professeurs?: Prisma.ProfesseurMatiereUncheckedUpdateManyWithoutMatiereNestedInput;
};
export type MatiereCreateManyClasseInput = {
    id?: string;
    nom: string;
    coefficient?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MatiereUpdateWithoutClasseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    coefficient?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    professeurs?: Prisma.ProfesseurMatiereUpdateManyWithoutMatiereNestedInput;
    evaluations?: Prisma.EvaluationUpdateManyWithoutMatiereNestedInput;
};
export type MatiereUncheckedUpdateWithoutClasseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    coefficient?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    professeurs?: Prisma.ProfesseurMatiereUncheckedUpdateManyWithoutMatiereNestedInput;
    evaluations?: Prisma.EvaluationUncheckedUpdateManyWithoutMatiereNestedInput;
};
export type MatiereUncheckedUpdateManyWithoutClasseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    coefficient?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatiereCountOutputType = {
    professeurs: number;
    evaluations: number;
};
export type MatiereCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    professeurs?: boolean | MatiereCountOutputTypeCountProfesseursArgs;
    evaluations?: boolean | MatiereCountOutputTypeCountEvaluationsArgs;
};
export type MatiereCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatiereCountOutputTypeSelect<ExtArgs> | null;
};
export type MatiereCountOutputTypeCountProfesseursArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfesseurMatiereWhereInput;
};
export type MatiereCountOutputTypeCountEvaluationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationWhereInput;
};
export type MatiereSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    coefficient?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    classeId?: boolean;
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
    professeurs?: boolean | Prisma.Matiere$professeursArgs<ExtArgs>;
    evaluations?: boolean | Prisma.Matiere$evaluationsArgs<ExtArgs>;
    _count?: boolean | Prisma.MatiereCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["matiere"]>;
export type MatiereSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    coefficient?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    classeId?: boolean;
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["matiere"]>;
export type MatiereSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    coefficient?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    classeId?: boolean;
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["matiere"]>;
export type MatiereSelectScalar = {
    id?: boolean;
    nom?: boolean;
    coefficient?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    classeId?: boolean;
};
export type MatiereOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "coefficient" | "createdAt" | "updatedAt" | "classeId", ExtArgs["result"]["matiere"]>;
export type MatiereInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
    professeurs?: boolean | Prisma.Matiere$professeursArgs<ExtArgs>;
    evaluations?: boolean | Prisma.Matiere$evaluationsArgs<ExtArgs>;
    _count?: boolean | Prisma.MatiereCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MatiereIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
};
export type MatiereIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
};
export type $MatierePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Matiere";
    objects: {
        classe: Prisma.$ClassePayload<ExtArgs>;
        professeurs: Prisma.$ProfesseurMatierePayload<ExtArgs>[];
        evaluations: Prisma.$EvaluationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nom: string;
        coefficient: number;
        createdAt: Date;
        updatedAt: Date;
        classeId: string;
    }, ExtArgs["result"]["matiere"]>;
    composites: {};
};
export type MatiereGetPayload<S extends boolean | null | undefined | MatiereDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MatierePayload, S>;
export type MatiereCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MatiereFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MatiereCountAggregateInputType | true;
};
export interface MatiereDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Matiere'];
        meta: {
            name: 'Matiere';
        };
    };
    findUnique<T extends MatiereFindUniqueArgs>(args: Prisma.SelectSubset<T, MatiereFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MatiereClient<runtime.Types.Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MatiereFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MatiereFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MatiereClient<runtime.Types.Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MatiereFindFirstArgs>(args?: Prisma.SelectSubset<T, MatiereFindFirstArgs<ExtArgs>>): Prisma.Prisma__MatiereClient<runtime.Types.Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MatiereFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MatiereFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MatiereClient<runtime.Types.Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MatiereFindManyArgs>(args?: Prisma.SelectSubset<T, MatiereFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MatiereCreateArgs>(args: Prisma.SelectSubset<T, MatiereCreateArgs<ExtArgs>>): Prisma.Prisma__MatiereClient<runtime.Types.Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MatiereCreateManyArgs>(args?: Prisma.SelectSubset<T, MatiereCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MatiereCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MatiereCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MatiereDeleteArgs>(args: Prisma.SelectSubset<T, MatiereDeleteArgs<ExtArgs>>): Prisma.Prisma__MatiereClient<runtime.Types.Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MatiereUpdateArgs>(args: Prisma.SelectSubset<T, MatiereUpdateArgs<ExtArgs>>): Prisma.Prisma__MatiereClient<runtime.Types.Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MatiereDeleteManyArgs>(args?: Prisma.SelectSubset<T, MatiereDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MatiereUpdateManyArgs>(args: Prisma.SelectSubset<T, MatiereUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MatiereUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MatiereUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MatiereUpsertArgs>(args: Prisma.SelectSubset<T, MatiereUpsertArgs<ExtArgs>>): Prisma.Prisma__MatiereClient<runtime.Types.Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MatiereCountArgs>(args?: Prisma.Subset<T, MatiereCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MatiereCountAggregateOutputType> : number>;
    aggregate<T extends MatiereAggregateArgs>(args: Prisma.Subset<T, MatiereAggregateArgs>): Prisma.PrismaPromise<GetMatiereAggregateType<T>>;
    groupBy<T extends MatiereGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MatiereGroupByArgs['orderBy'];
    } : {
        orderBy?: MatiereGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MatiereGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatiereGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MatiereFieldRefs;
}
export interface Prisma__MatiereClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    classe<T extends Prisma.ClasseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClasseDefaultArgs<ExtArgs>>): Prisma.Prisma__ClasseClient<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    professeurs<T extends Prisma.Matiere$professeursArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Matiere$professeursArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfesseurMatierePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    evaluations<T extends Prisma.Matiere$evaluationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Matiere$evaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MatiereFieldRefs {
    readonly id: Prisma.FieldRef<"Matiere", 'String'>;
    readonly nom: Prisma.FieldRef<"Matiere", 'String'>;
    readonly coefficient: Prisma.FieldRef<"Matiere", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Matiere", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Matiere", 'DateTime'>;
    readonly classeId: Prisma.FieldRef<"Matiere", 'String'>;
}
export type MatiereFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatiereSelect<ExtArgs> | null;
    omit?: Prisma.MatiereOmit<ExtArgs> | null;
    include?: Prisma.MatiereInclude<ExtArgs> | null;
    where: Prisma.MatiereWhereUniqueInput;
};
export type MatiereFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatiereSelect<ExtArgs> | null;
    omit?: Prisma.MatiereOmit<ExtArgs> | null;
    include?: Prisma.MatiereInclude<ExtArgs> | null;
    where: Prisma.MatiereWhereUniqueInput;
};
export type MatiereFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatiereSelect<ExtArgs> | null;
    omit?: Prisma.MatiereOmit<ExtArgs> | null;
    include?: Prisma.MatiereInclude<ExtArgs> | null;
    where?: Prisma.MatiereWhereInput;
    orderBy?: Prisma.MatiereOrderByWithRelationInput | Prisma.MatiereOrderByWithRelationInput[];
    cursor?: Prisma.MatiereWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MatiereScalarFieldEnum | Prisma.MatiereScalarFieldEnum[];
};
export type MatiereFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatiereSelect<ExtArgs> | null;
    omit?: Prisma.MatiereOmit<ExtArgs> | null;
    include?: Prisma.MatiereInclude<ExtArgs> | null;
    where?: Prisma.MatiereWhereInput;
    orderBy?: Prisma.MatiereOrderByWithRelationInput | Prisma.MatiereOrderByWithRelationInput[];
    cursor?: Prisma.MatiereWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MatiereScalarFieldEnum | Prisma.MatiereScalarFieldEnum[];
};
export type MatiereFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatiereSelect<ExtArgs> | null;
    omit?: Prisma.MatiereOmit<ExtArgs> | null;
    include?: Prisma.MatiereInclude<ExtArgs> | null;
    where?: Prisma.MatiereWhereInput;
    orderBy?: Prisma.MatiereOrderByWithRelationInput | Prisma.MatiereOrderByWithRelationInput[];
    cursor?: Prisma.MatiereWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MatiereScalarFieldEnum | Prisma.MatiereScalarFieldEnum[];
};
export type MatiereCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatiereSelect<ExtArgs> | null;
    omit?: Prisma.MatiereOmit<ExtArgs> | null;
    include?: Prisma.MatiereInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatiereCreateInput, Prisma.MatiereUncheckedCreateInput>;
};
export type MatiereCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MatiereCreateManyInput | Prisma.MatiereCreateManyInput[];
};
export type MatiereCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatiereSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MatiereOmit<ExtArgs> | null;
    data: Prisma.MatiereCreateManyInput | Prisma.MatiereCreateManyInput[];
    include?: Prisma.MatiereIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MatiereUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatiereSelect<ExtArgs> | null;
    omit?: Prisma.MatiereOmit<ExtArgs> | null;
    include?: Prisma.MatiereInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatiereUpdateInput, Prisma.MatiereUncheckedUpdateInput>;
    where: Prisma.MatiereWhereUniqueInput;
};
export type MatiereUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MatiereUpdateManyMutationInput, Prisma.MatiereUncheckedUpdateManyInput>;
    where?: Prisma.MatiereWhereInput;
    limit?: number;
};
export type MatiereUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatiereSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MatiereOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatiereUpdateManyMutationInput, Prisma.MatiereUncheckedUpdateManyInput>;
    where?: Prisma.MatiereWhereInput;
    limit?: number;
    include?: Prisma.MatiereIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MatiereUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatiereSelect<ExtArgs> | null;
    omit?: Prisma.MatiereOmit<ExtArgs> | null;
    include?: Prisma.MatiereInclude<ExtArgs> | null;
    where: Prisma.MatiereWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatiereCreateInput, Prisma.MatiereUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MatiereUpdateInput, Prisma.MatiereUncheckedUpdateInput>;
};
export type MatiereDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatiereSelect<ExtArgs> | null;
    omit?: Prisma.MatiereOmit<ExtArgs> | null;
    include?: Prisma.MatiereInclude<ExtArgs> | null;
    where: Prisma.MatiereWhereUniqueInput;
};
export type MatiereDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatiereWhereInput;
    limit?: number;
};
export type Matiere$professeursArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Matiere$evaluationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MatiereDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatiereSelect<ExtArgs> | null;
    omit?: Prisma.MatiereOmit<ExtArgs> | null;
    include?: Prisma.MatiereInclude<ExtArgs> | null;
};

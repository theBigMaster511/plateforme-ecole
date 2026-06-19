import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EmploiTempsModel = runtime.Types.Result.DefaultSelection<Prisma.$EmploiTempsPayload>;
export type AggregateEmploiTemps = {
    _count: EmploiTempsCountAggregateOutputType | null;
    _min: EmploiTempsMinAggregateOutputType | null;
    _max: EmploiTempsMaxAggregateOutputType | null;
};
export type EmploiTempsMinAggregateOutputType = {
    id: string | null;
    jour: $Enums.Jour | null;
    heureDebut: string | null;
    heureFin: string | null;
    salle: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    classeId: string | null;
    matiereId: string | null;
    professeurId: string | null;
};
export type EmploiTempsMaxAggregateOutputType = {
    id: string | null;
    jour: $Enums.Jour | null;
    heureDebut: string | null;
    heureFin: string | null;
    salle: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    classeId: string | null;
    matiereId: string | null;
    professeurId: string | null;
};
export type EmploiTempsCountAggregateOutputType = {
    id: number;
    jour: number;
    heureDebut: number;
    heureFin: number;
    salle: number;
    createdAt: number;
    updatedAt: number;
    classeId: number;
    matiereId: number;
    professeurId: number;
    _all: number;
};
export type EmploiTempsMinAggregateInputType = {
    id?: true;
    jour?: true;
    heureDebut?: true;
    heureFin?: true;
    salle?: true;
    createdAt?: true;
    updatedAt?: true;
    classeId?: true;
    matiereId?: true;
    professeurId?: true;
};
export type EmploiTempsMaxAggregateInputType = {
    id?: true;
    jour?: true;
    heureDebut?: true;
    heureFin?: true;
    salle?: true;
    createdAt?: true;
    updatedAt?: true;
    classeId?: true;
    matiereId?: true;
    professeurId?: true;
};
export type EmploiTempsCountAggregateInputType = {
    id?: true;
    jour?: true;
    heureDebut?: true;
    heureFin?: true;
    salle?: true;
    createdAt?: true;
    updatedAt?: true;
    classeId?: true;
    matiereId?: true;
    professeurId?: true;
    _all?: true;
};
export type EmploiTempsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmploiTempsWhereInput;
    orderBy?: Prisma.EmploiTempsOrderByWithRelationInput | Prisma.EmploiTempsOrderByWithRelationInput[];
    cursor?: Prisma.EmploiTempsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EmploiTempsCountAggregateInputType;
    _min?: EmploiTempsMinAggregateInputType;
    _max?: EmploiTempsMaxAggregateInputType;
};
export type GetEmploiTempsAggregateType<T extends EmploiTempsAggregateArgs> = {
    [P in keyof T & keyof AggregateEmploiTemps]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEmploiTemps[P]> : Prisma.GetScalarType<T[P], AggregateEmploiTemps[P]>;
};
export type EmploiTempsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmploiTempsWhereInput;
    orderBy?: Prisma.EmploiTempsOrderByWithAggregationInput | Prisma.EmploiTempsOrderByWithAggregationInput[];
    by: Prisma.EmploiTempsScalarFieldEnum[] | Prisma.EmploiTempsScalarFieldEnum;
    having?: Prisma.EmploiTempsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmploiTempsCountAggregateInputType | true;
    _min?: EmploiTempsMinAggregateInputType;
    _max?: EmploiTempsMaxAggregateInputType;
};
export type EmploiTempsGroupByOutputType = {
    id: string;
    jour: $Enums.Jour;
    heureDebut: string;
    heureFin: string;
    salle: string | null;
    createdAt: Date;
    updatedAt: Date;
    classeId: string;
    matiereId: string;
    professeurId: string | null;
    _count: EmploiTempsCountAggregateOutputType | null;
    _min: EmploiTempsMinAggregateOutputType | null;
    _max: EmploiTempsMaxAggregateOutputType | null;
};
export type GetEmploiTempsGroupByPayload<T extends EmploiTempsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EmploiTempsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EmploiTempsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EmploiTempsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EmploiTempsGroupByOutputType[P]>;
}>>;
export type EmploiTempsWhereInput = {
    AND?: Prisma.EmploiTempsWhereInput | Prisma.EmploiTempsWhereInput[];
    OR?: Prisma.EmploiTempsWhereInput[];
    NOT?: Prisma.EmploiTempsWhereInput | Prisma.EmploiTempsWhereInput[];
    id?: Prisma.StringFilter<"EmploiTemps"> | string;
    jour?: Prisma.EnumJourFilter<"EmploiTemps"> | $Enums.Jour;
    heureDebut?: Prisma.StringFilter<"EmploiTemps"> | string;
    heureFin?: Prisma.StringFilter<"EmploiTemps"> | string;
    salle?: Prisma.StringNullableFilter<"EmploiTemps"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmploiTemps"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EmploiTemps"> | Date | string;
    classeId?: Prisma.StringFilter<"EmploiTemps"> | string;
    matiereId?: Prisma.StringFilter<"EmploiTemps"> | string;
    professeurId?: Prisma.StringNullableFilter<"EmploiTemps"> | string | null;
    classe?: Prisma.XOR<Prisma.ClasseScalarRelationFilter, Prisma.ClasseWhereInput>;
    matiere?: Prisma.XOR<Prisma.MatiereScalarRelationFilter, Prisma.MatiereWhereInput>;
    professeur?: Prisma.XOR<Prisma.ProfesseurNullableScalarRelationFilter, Prisma.ProfesseurWhereInput> | null;
};
export type EmploiTempsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    jour?: Prisma.SortOrder;
    heureDebut?: Prisma.SortOrder;
    heureFin?: Prisma.SortOrder;
    salle?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    professeurId?: Prisma.SortOrderInput | Prisma.SortOrder;
    classe?: Prisma.ClasseOrderByWithRelationInput;
    matiere?: Prisma.MatiereOrderByWithRelationInput;
    professeur?: Prisma.ProfesseurOrderByWithRelationInput;
};
export type EmploiTempsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EmploiTempsWhereInput | Prisma.EmploiTempsWhereInput[];
    OR?: Prisma.EmploiTempsWhereInput[];
    NOT?: Prisma.EmploiTempsWhereInput | Prisma.EmploiTempsWhereInput[];
    jour?: Prisma.EnumJourFilter<"EmploiTemps"> | $Enums.Jour;
    heureDebut?: Prisma.StringFilter<"EmploiTemps"> | string;
    heureFin?: Prisma.StringFilter<"EmploiTemps"> | string;
    salle?: Prisma.StringNullableFilter<"EmploiTemps"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmploiTemps"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EmploiTemps"> | Date | string;
    classeId?: Prisma.StringFilter<"EmploiTemps"> | string;
    matiereId?: Prisma.StringFilter<"EmploiTemps"> | string;
    professeurId?: Prisma.StringNullableFilter<"EmploiTemps"> | string | null;
    classe?: Prisma.XOR<Prisma.ClasseScalarRelationFilter, Prisma.ClasseWhereInput>;
    matiere?: Prisma.XOR<Prisma.MatiereScalarRelationFilter, Prisma.MatiereWhereInput>;
    professeur?: Prisma.XOR<Prisma.ProfesseurNullableScalarRelationFilter, Prisma.ProfesseurWhereInput> | null;
}, "id">;
export type EmploiTempsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    jour?: Prisma.SortOrder;
    heureDebut?: Prisma.SortOrder;
    heureFin?: Prisma.SortOrder;
    salle?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    professeurId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.EmploiTempsCountOrderByAggregateInput;
    _max?: Prisma.EmploiTempsMaxOrderByAggregateInput;
    _min?: Prisma.EmploiTempsMinOrderByAggregateInput;
};
export type EmploiTempsScalarWhereWithAggregatesInput = {
    AND?: Prisma.EmploiTempsScalarWhereWithAggregatesInput | Prisma.EmploiTempsScalarWhereWithAggregatesInput[];
    OR?: Prisma.EmploiTempsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EmploiTempsScalarWhereWithAggregatesInput | Prisma.EmploiTempsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EmploiTemps"> | string;
    jour?: Prisma.EnumJourWithAggregatesFilter<"EmploiTemps"> | $Enums.Jour;
    heureDebut?: Prisma.StringWithAggregatesFilter<"EmploiTemps"> | string;
    heureFin?: Prisma.StringWithAggregatesFilter<"EmploiTemps"> | string;
    salle?: Prisma.StringNullableWithAggregatesFilter<"EmploiTemps"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EmploiTemps"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EmploiTemps"> | Date | string;
    classeId?: Prisma.StringWithAggregatesFilter<"EmploiTemps"> | string;
    matiereId?: Prisma.StringWithAggregatesFilter<"EmploiTemps"> | string;
    professeurId?: Prisma.StringNullableWithAggregatesFilter<"EmploiTemps"> | string | null;
};
export type EmploiTempsCreateInput = {
    id?: string;
    jour: $Enums.Jour;
    heureDebut: string;
    heureFin: string;
    salle?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classe: Prisma.ClasseCreateNestedOneWithoutEmploisTempsInput;
    matiere: Prisma.MatiereCreateNestedOneWithoutEmploisTempsInput;
    professeur?: Prisma.ProfesseurCreateNestedOneWithoutEmploisTempsInput;
};
export type EmploiTempsUncheckedCreateInput = {
    id?: string;
    jour: $Enums.Jour;
    heureDebut: string;
    heureFin: string;
    salle?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classeId: string;
    matiereId: string;
    professeurId?: string | null;
};
export type EmploiTempsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jour?: Prisma.EnumJourFieldUpdateOperationsInput | $Enums.Jour;
    heureDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    heureFin?: Prisma.StringFieldUpdateOperationsInput | string;
    salle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classe?: Prisma.ClasseUpdateOneRequiredWithoutEmploisTempsNestedInput;
    matiere?: Prisma.MatiereUpdateOneRequiredWithoutEmploisTempsNestedInput;
    professeur?: Prisma.ProfesseurUpdateOneWithoutEmploisTempsNestedInput;
};
export type EmploiTempsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jour?: Prisma.EnumJourFieldUpdateOperationsInput | $Enums.Jour;
    heureDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    heureFin?: Prisma.StringFieldUpdateOperationsInput | string;
    salle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classeId?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    professeurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EmploiTempsCreateManyInput = {
    id?: string;
    jour: $Enums.Jour;
    heureDebut: string;
    heureFin: string;
    salle?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classeId: string;
    matiereId: string;
    professeurId?: string | null;
};
export type EmploiTempsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jour?: Prisma.EnumJourFieldUpdateOperationsInput | $Enums.Jour;
    heureDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    heureFin?: Prisma.StringFieldUpdateOperationsInput | string;
    salle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmploiTempsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jour?: Prisma.EnumJourFieldUpdateOperationsInput | $Enums.Jour;
    heureDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    heureFin?: Prisma.StringFieldUpdateOperationsInput | string;
    salle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classeId?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    professeurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EmploiTempsListRelationFilter = {
    every?: Prisma.EmploiTempsWhereInput;
    some?: Prisma.EmploiTempsWhereInput;
    none?: Prisma.EmploiTempsWhereInput;
};
export type EmploiTempsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EmploiTempsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jour?: Prisma.SortOrder;
    heureDebut?: Prisma.SortOrder;
    heureFin?: Prisma.SortOrder;
    salle?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    professeurId?: Prisma.SortOrder;
};
export type EmploiTempsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jour?: Prisma.SortOrder;
    heureDebut?: Prisma.SortOrder;
    heureFin?: Prisma.SortOrder;
    salle?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    professeurId?: Prisma.SortOrder;
};
export type EmploiTempsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jour?: Prisma.SortOrder;
    heureDebut?: Prisma.SortOrder;
    heureFin?: Prisma.SortOrder;
    salle?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    professeurId?: Prisma.SortOrder;
};
export type EmploiTempsCreateNestedManyWithoutProfesseurInput = {
    create?: Prisma.XOR<Prisma.EmploiTempsCreateWithoutProfesseurInput, Prisma.EmploiTempsUncheckedCreateWithoutProfesseurInput> | Prisma.EmploiTempsCreateWithoutProfesseurInput[] | Prisma.EmploiTempsUncheckedCreateWithoutProfesseurInput[];
    connectOrCreate?: Prisma.EmploiTempsCreateOrConnectWithoutProfesseurInput | Prisma.EmploiTempsCreateOrConnectWithoutProfesseurInput[];
    createMany?: Prisma.EmploiTempsCreateManyProfesseurInputEnvelope;
    connect?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
};
export type EmploiTempsUncheckedCreateNestedManyWithoutProfesseurInput = {
    create?: Prisma.XOR<Prisma.EmploiTempsCreateWithoutProfesseurInput, Prisma.EmploiTempsUncheckedCreateWithoutProfesseurInput> | Prisma.EmploiTempsCreateWithoutProfesseurInput[] | Prisma.EmploiTempsUncheckedCreateWithoutProfesseurInput[];
    connectOrCreate?: Prisma.EmploiTempsCreateOrConnectWithoutProfesseurInput | Prisma.EmploiTempsCreateOrConnectWithoutProfesseurInput[];
    createMany?: Prisma.EmploiTempsCreateManyProfesseurInputEnvelope;
    connect?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
};
export type EmploiTempsUpdateManyWithoutProfesseurNestedInput = {
    create?: Prisma.XOR<Prisma.EmploiTempsCreateWithoutProfesseurInput, Prisma.EmploiTempsUncheckedCreateWithoutProfesseurInput> | Prisma.EmploiTempsCreateWithoutProfesseurInput[] | Prisma.EmploiTempsUncheckedCreateWithoutProfesseurInput[];
    connectOrCreate?: Prisma.EmploiTempsCreateOrConnectWithoutProfesseurInput | Prisma.EmploiTempsCreateOrConnectWithoutProfesseurInput[];
    upsert?: Prisma.EmploiTempsUpsertWithWhereUniqueWithoutProfesseurInput | Prisma.EmploiTempsUpsertWithWhereUniqueWithoutProfesseurInput[];
    createMany?: Prisma.EmploiTempsCreateManyProfesseurInputEnvelope;
    set?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    disconnect?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    delete?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    connect?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    update?: Prisma.EmploiTempsUpdateWithWhereUniqueWithoutProfesseurInput | Prisma.EmploiTempsUpdateWithWhereUniqueWithoutProfesseurInput[];
    updateMany?: Prisma.EmploiTempsUpdateManyWithWhereWithoutProfesseurInput | Prisma.EmploiTempsUpdateManyWithWhereWithoutProfesseurInput[];
    deleteMany?: Prisma.EmploiTempsScalarWhereInput | Prisma.EmploiTempsScalarWhereInput[];
};
export type EmploiTempsUncheckedUpdateManyWithoutProfesseurNestedInput = {
    create?: Prisma.XOR<Prisma.EmploiTempsCreateWithoutProfesseurInput, Prisma.EmploiTempsUncheckedCreateWithoutProfesseurInput> | Prisma.EmploiTempsCreateWithoutProfesseurInput[] | Prisma.EmploiTempsUncheckedCreateWithoutProfesseurInput[];
    connectOrCreate?: Prisma.EmploiTempsCreateOrConnectWithoutProfesseurInput | Prisma.EmploiTempsCreateOrConnectWithoutProfesseurInput[];
    upsert?: Prisma.EmploiTempsUpsertWithWhereUniqueWithoutProfesseurInput | Prisma.EmploiTempsUpsertWithWhereUniqueWithoutProfesseurInput[];
    createMany?: Prisma.EmploiTempsCreateManyProfesseurInputEnvelope;
    set?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    disconnect?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    delete?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    connect?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    update?: Prisma.EmploiTempsUpdateWithWhereUniqueWithoutProfesseurInput | Prisma.EmploiTempsUpdateWithWhereUniqueWithoutProfesseurInput[];
    updateMany?: Prisma.EmploiTempsUpdateManyWithWhereWithoutProfesseurInput | Prisma.EmploiTempsUpdateManyWithWhereWithoutProfesseurInput[];
    deleteMany?: Prisma.EmploiTempsScalarWhereInput | Prisma.EmploiTempsScalarWhereInput[];
};
export type EmploiTempsCreateNestedManyWithoutClasseInput = {
    create?: Prisma.XOR<Prisma.EmploiTempsCreateWithoutClasseInput, Prisma.EmploiTempsUncheckedCreateWithoutClasseInput> | Prisma.EmploiTempsCreateWithoutClasseInput[] | Prisma.EmploiTempsUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.EmploiTempsCreateOrConnectWithoutClasseInput | Prisma.EmploiTempsCreateOrConnectWithoutClasseInput[];
    createMany?: Prisma.EmploiTempsCreateManyClasseInputEnvelope;
    connect?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
};
export type EmploiTempsUncheckedCreateNestedManyWithoutClasseInput = {
    create?: Prisma.XOR<Prisma.EmploiTempsCreateWithoutClasseInput, Prisma.EmploiTempsUncheckedCreateWithoutClasseInput> | Prisma.EmploiTempsCreateWithoutClasseInput[] | Prisma.EmploiTempsUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.EmploiTempsCreateOrConnectWithoutClasseInput | Prisma.EmploiTempsCreateOrConnectWithoutClasseInput[];
    createMany?: Prisma.EmploiTempsCreateManyClasseInputEnvelope;
    connect?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
};
export type EmploiTempsUpdateManyWithoutClasseNestedInput = {
    create?: Prisma.XOR<Prisma.EmploiTempsCreateWithoutClasseInput, Prisma.EmploiTempsUncheckedCreateWithoutClasseInput> | Prisma.EmploiTempsCreateWithoutClasseInput[] | Prisma.EmploiTempsUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.EmploiTempsCreateOrConnectWithoutClasseInput | Prisma.EmploiTempsCreateOrConnectWithoutClasseInput[];
    upsert?: Prisma.EmploiTempsUpsertWithWhereUniqueWithoutClasseInput | Prisma.EmploiTempsUpsertWithWhereUniqueWithoutClasseInput[];
    createMany?: Prisma.EmploiTempsCreateManyClasseInputEnvelope;
    set?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    disconnect?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    delete?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    connect?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    update?: Prisma.EmploiTempsUpdateWithWhereUniqueWithoutClasseInput | Prisma.EmploiTempsUpdateWithWhereUniqueWithoutClasseInput[];
    updateMany?: Prisma.EmploiTempsUpdateManyWithWhereWithoutClasseInput | Prisma.EmploiTempsUpdateManyWithWhereWithoutClasseInput[];
    deleteMany?: Prisma.EmploiTempsScalarWhereInput | Prisma.EmploiTempsScalarWhereInput[];
};
export type EmploiTempsUncheckedUpdateManyWithoutClasseNestedInput = {
    create?: Prisma.XOR<Prisma.EmploiTempsCreateWithoutClasseInput, Prisma.EmploiTempsUncheckedCreateWithoutClasseInput> | Prisma.EmploiTempsCreateWithoutClasseInput[] | Prisma.EmploiTempsUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.EmploiTempsCreateOrConnectWithoutClasseInput | Prisma.EmploiTempsCreateOrConnectWithoutClasseInput[];
    upsert?: Prisma.EmploiTempsUpsertWithWhereUniqueWithoutClasseInput | Prisma.EmploiTempsUpsertWithWhereUniqueWithoutClasseInput[];
    createMany?: Prisma.EmploiTempsCreateManyClasseInputEnvelope;
    set?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    disconnect?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    delete?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    connect?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    update?: Prisma.EmploiTempsUpdateWithWhereUniqueWithoutClasseInput | Prisma.EmploiTempsUpdateWithWhereUniqueWithoutClasseInput[];
    updateMany?: Prisma.EmploiTempsUpdateManyWithWhereWithoutClasseInput | Prisma.EmploiTempsUpdateManyWithWhereWithoutClasseInput[];
    deleteMany?: Prisma.EmploiTempsScalarWhereInput | Prisma.EmploiTempsScalarWhereInput[];
};
export type EmploiTempsCreateNestedManyWithoutMatiereInput = {
    create?: Prisma.XOR<Prisma.EmploiTempsCreateWithoutMatiereInput, Prisma.EmploiTempsUncheckedCreateWithoutMatiereInput> | Prisma.EmploiTempsCreateWithoutMatiereInput[] | Prisma.EmploiTempsUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.EmploiTempsCreateOrConnectWithoutMatiereInput | Prisma.EmploiTempsCreateOrConnectWithoutMatiereInput[];
    createMany?: Prisma.EmploiTempsCreateManyMatiereInputEnvelope;
    connect?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
};
export type EmploiTempsUncheckedCreateNestedManyWithoutMatiereInput = {
    create?: Prisma.XOR<Prisma.EmploiTempsCreateWithoutMatiereInput, Prisma.EmploiTempsUncheckedCreateWithoutMatiereInput> | Prisma.EmploiTempsCreateWithoutMatiereInput[] | Prisma.EmploiTempsUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.EmploiTempsCreateOrConnectWithoutMatiereInput | Prisma.EmploiTempsCreateOrConnectWithoutMatiereInput[];
    createMany?: Prisma.EmploiTempsCreateManyMatiereInputEnvelope;
    connect?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
};
export type EmploiTempsUpdateManyWithoutMatiereNestedInput = {
    create?: Prisma.XOR<Prisma.EmploiTempsCreateWithoutMatiereInput, Prisma.EmploiTempsUncheckedCreateWithoutMatiereInput> | Prisma.EmploiTempsCreateWithoutMatiereInput[] | Prisma.EmploiTempsUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.EmploiTempsCreateOrConnectWithoutMatiereInput | Prisma.EmploiTempsCreateOrConnectWithoutMatiereInput[];
    upsert?: Prisma.EmploiTempsUpsertWithWhereUniqueWithoutMatiereInput | Prisma.EmploiTempsUpsertWithWhereUniqueWithoutMatiereInput[];
    createMany?: Prisma.EmploiTempsCreateManyMatiereInputEnvelope;
    set?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    disconnect?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    delete?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    connect?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    update?: Prisma.EmploiTempsUpdateWithWhereUniqueWithoutMatiereInput | Prisma.EmploiTempsUpdateWithWhereUniqueWithoutMatiereInput[];
    updateMany?: Prisma.EmploiTempsUpdateManyWithWhereWithoutMatiereInput | Prisma.EmploiTempsUpdateManyWithWhereWithoutMatiereInput[];
    deleteMany?: Prisma.EmploiTempsScalarWhereInput | Prisma.EmploiTempsScalarWhereInput[];
};
export type EmploiTempsUncheckedUpdateManyWithoutMatiereNestedInput = {
    create?: Prisma.XOR<Prisma.EmploiTempsCreateWithoutMatiereInput, Prisma.EmploiTempsUncheckedCreateWithoutMatiereInput> | Prisma.EmploiTempsCreateWithoutMatiereInput[] | Prisma.EmploiTempsUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.EmploiTempsCreateOrConnectWithoutMatiereInput | Prisma.EmploiTempsCreateOrConnectWithoutMatiereInput[];
    upsert?: Prisma.EmploiTempsUpsertWithWhereUniqueWithoutMatiereInput | Prisma.EmploiTempsUpsertWithWhereUniqueWithoutMatiereInput[];
    createMany?: Prisma.EmploiTempsCreateManyMatiereInputEnvelope;
    set?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    disconnect?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    delete?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    connect?: Prisma.EmploiTempsWhereUniqueInput | Prisma.EmploiTempsWhereUniqueInput[];
    update?: Prisma.EmploiTempsUpdateWithWhereUniqueWithoutMatiereInput | Prisma.EmploiTempsUpdateWithWhereUniqueWithoutMatiereInput[];
    updateMany?: Prisma.EmploiTempsUpdateManyWithWhereWithoutMatiereInput | Prisma.EmploiTempsUpdateManyWithWhereWithoutMatiereInput[];
    deleteMany?: Prisma.EmploiTempsScalarWhereInput | Prisma.EmploiTempsScalarWhereInput[];
};
export type EnumJourFieldUpdateOperationsInput = {
    set?: $Enums.Jour;
};
export type EmploiTempsCreateWithoutProfesseurInput = {
    id?: string;
    jour: $Enums.Jour;
    heureDebut: string;
    heureFin: string;
    salle?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classe: Prisma.ClasseCreateNestedOneWithoutEmploisTempsInput;
    matiere: Prisma.MatiereCreateNestedOneWithoutEmploisTempsInput;
};
export type EmploiTempsUncheckedCreateWithoutProfesseurInput = {
    id?: string;
    jour: $Enums.Jour;
    heureDebut: string;
    heureFin: string;
    salle?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classeId: string;
    matiereId: string;
};
export type EmploiTempsCreateOrConnectWithoutProfesseurInput = {
    where: Prisma.EmploiTempsWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmploiTempsCreateWithoutProfesseurInput, Prisma.EmploiTempsUncheckedCreateWithoutProfesseurInput>;
};
export type EmploiTempsCreateManyProfesseurInputEnvelope = {
    data: Prisma.EmploiTempsCreateManyProfesseurInput | Prisma.EmploiTempsCreateManyProfesseurInput[];
};
export type EmploiTempsUpsertWithWhereUniqueWithoutProfesseurInput = {
    where: Prisma.EmploiTempsWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmploiTempsUpdateWithoutProfesseurInput, Prisma.EmploiTempsUncheckedUpdateWithoutProfesseurInput>;
    create: Prisma.XOR<Prisma.EmploiTempsCreateWithoutProfesseurInput, Prisma.EmploiTempsUncheckedCreateWithoutProfesseurInput>;
};
export type EmploiTempsUpdateWithWhereUniqueWithoutProfesseurInput = {
    where: Prisma.EmploiTempsWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmploiTempsUpdateWithoutProfesseurInput, Prisma.EmploiTempsUncheckedUpdateWithoutProfesseurInput>;
};
export type EmploiTempsUpdateManyWithWhereWithoutProfesseurInput = {
    where: Prisma.EmploiTempsScalarWhereInput;
    data: Prisma.XOR<Prisma.EmploiTempsUpdateManyMutationInput, Prisma.EmploiTempsUncheckedUpdateManyWithoutProfesseurInput>;
};
export type EmploiTempsScalarWhereInput = {
    AND?: Prisma.EmploiTempsScalarWhereInput | Prisma.EmploiTempsScalarWhereInput[];
    OR?: Prisma.EmploiTempsScalarWhereInput[];
    NOT?: Prisma.EmploiTempsScalarWhereInput | Prisma.EmploiTempsScalarWhereInput[];
    id?: Prisma.StringFilter<"EmploiTemps"> | string;
    jour?: Prisma.EnumJourFilter<"EmploiTemps"> | $Enums.Jour;
    heureDebut?: Prisma.StringFilter<"EmploiTemps"> | string;
    heureFin?: Prisma.StringFilter<"EmploiTemps"> | string;
    salle?: Prisma.StringNullableFilter<"EmploiTemps"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmploiTemps"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EmploiTemps"> | Date | string;
    classeId?: Prisma.StringFilter<"EmploiTemps"> | string;
    matiereId?: Prisma.StringFilter<"EmploiTemps"> | string;
    professeurId?: Prisma.StringNullableFilter<"EmploiTemps"> | string | null;
};
export type EmploiTempsCreateWithoutClasseInput = {
    id?: string;
    jour: $Enums.Jour;
    heureDebut: string;
    heureFin: string;
    salle?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matiere: Prisma.MatiereCreateNestedOneWithoutEmploisTempsInput;
    professeur?: Prisma.ProfesseurCreateNestedOneWithoutEmploisTempsInput;
};
export type EmploiTempsUncheckedCreateWithoutClasseInput = {
    id?: string;
    jour: $Enums.Jour;
    heureDebut: string;
    heureFin: string;
    salle?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matiereId: string;
    professeurId?: string | null;
};
export type EmploiTempsCreateOrConnectWithoutClasseInput = {
    where: Prisma.EmploiTempsWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmploiTempsCreateWithoutClasseInput, Prisma.EmploiTempsUncheckedCreateWithoutClasseInput>;
};
export type EmploiTempsCreateManyClasseInputEnvelope = {
    data: Prisma.EmploiTempsCreateManyClasseInput | Prisma.EmploiTempsCreateManyClasseInput[];
};
export type EmploiTempsUpsertWithWhereUniqueWithoutClasseInput = {
    where: Prisma.EmploiTempsWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmploiTempsUpdateWithoutClasseInput, Prisma.EmploiTempsUncheckedUpdateWithoutClasseInput>;
    create: Prisma.XOR<Prisma.EmploiTempsCreateWithoutClasseInput, Prisma.EmploiTempsUncheckedCreateWithoutClasseInput>;
};
export type EmploiTempsUpdateWithWhereUniqueWithoutClasseInput = {
    where: Prisma.EmploiTempsWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmploiTempsUpdateWithoutClasseInput, Prisma.EmploiTempsUncheckedUpdateWithoutClasseInput>;
};
export type EmploiTempsUpdateManyWithWhereWithoutClasseInput = {
    where: Prisma.EmploiTempsScalarWhereInput;
    data: Prisma.XOR<Prisma.EmploiTempsUpdateManyMutationInput, Prisma.EmploiTempsUncheckedUpdateManyWithoutClasseInput>;
};
export type EmploiTempsCreateWithoutMatiereInput = {
    id?: string;
    jour: $Enums.Jour;
    heureDebut: string;
    heureFin: string;
    salle?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classe: Prisma.ClasseCreateNestedOneWithoutEmploisTempsInput;
    professeur?: Prisma.ProfesseurCreateNestedOneWithoutEmploisTempsInput;
};
export type EmploiTempsUncheckedCreateWithoutMatiereInput = {
    id?: string;
    jour: $Enums.Jour;
    heureDebut: string;
    heureFin: string;
    salle?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classeId: string;
    professeurId?: string | null;
};
export type EmploiTempsCreateOrConnectWithoutMatiereInput = {
    where: Prisma.EmploiTempsWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmploiTempsCreateWithoutMatiereInput, Prisma.EmploiTempsUncheckedCreateWithoutMatiereInput>;
};
export type EmploiTempsCreateManyMatiereInputEnvelope = {
    data: Prisma.EmploiTempsCreateManyMatiereInput | Prisma.EmploiTempsCreateManyMatiereInput[];
};
export type EmploiTempsUpsertWithWhereUniqueWithoutMatiereInput = {
    where: Prisma.EmploiTempsWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmploiTempsUpdateWithoutMatiereInput, Prisma.EmploiTempsUncheckedUpdateWithoutMatiereInput>;
    create: Prisma.XOR<Prisma.EmploiTempsCreateWithoutMatiereInput, Prisma.EmploiTempsUncheckedCreateWithoutMatiereInput>;
};
export type EmploiTempsUpdateWithWhereUniqueWithoutMatiereInput = {
    where: Prisma.EmploiTempsWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmploiTempsUpdateWithoutMatiereInput, Prisma.EmploiTempsUncheckedUpdateWithoutMatiereInput>;
};
export type EmploiTempsUpdateManyWithWhereWithoutMatiereInput = {
    where: Prisma.EmploiTempsScalarWhereInput;
    data: Prisma.XOR<Prisma.EmploiTempsUpdateManyMutationInput, Prisma.EmploiTempsUncheckedUpdateManyWithoutMatiereInput>;
};
export type EmploiTempsCreateManyProfesseurInput = {
    id?: string;
    jour: $Enums.Jour;
    heureDebut: string;
    heureFin: string;
    salle?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classeId: string;
    matiereId: string;
};
export type EmploiTempsUpdateWithoutProfesseurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jour?: Prisma.EnumJourFieldUpdateOperationsInput | $Enums.Jour;
    heureDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    heureFin?: Prisma.StringFieldUpdateOperationsInput | string;
    salle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classe?: Prisma.ClasseUpdateOneRequiredWithoutEmploisTempsNestedInput;
    matiere?: Prisma.MatiereUpdateOneRequiredWithoutEmploisTempsNestedInput;
};
export type EmploiTempsUncheckedUpdateWithoutProfesseurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jour?: Prisma.EnumJourFieldUpdateOperationsInput | $Enums.Jour;
    heureDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    heureFin?: Prisma.StringFieldUpdateOperationsInput | string;
    salle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classeId?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EmploiTempsUncheckedUpdateManyWithoutProfesseurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jour?: Prisma.EnumJourFieldUpdateOperationsInput | $Enums.Jour;
    heureDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    heureFin?: Prisma.StringFieldUpdateOperationsInput | string;
    salle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classeId?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EmploiTempsCreateManyClasseInput = {
    id?: string;
    jour: $Enums.Jour;
    heureDebut: string;
    heureFin: string;
    salle?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matiereId: string;
    professeurId?: string | null;
};
export type EmploiTempsUpdateWithoutClasseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jour?: Prisma.EnumJourFieldUpdateOperationsInput | $Enums.Jour;
    heureDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    heureFin?: Prisma.StringFieldUpdateOperationsInput | string;
    salle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matiere?: Prisma.MatiereUpdateOneRequiredWithoutEmploisTempsNestedInput;
    professeur?: Prisma.ProfesseurUpdateOneWithoutEmploisTempsNestedInput;
};
export type EmploiTempsUncheckedUpdateWithoutClasseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jour?: Prisma.EnumJourFieldUpdateOperationsInput | $Enums.Jour;
    heureDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    heureFin?: Prisma.StringFieldUpdateOperationsInput | string;
    salle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    professeurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EmploiTempsUncheckedUpdateManyWithoutClasseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jour?: Prisma.EnumJourFieldUpdateOperationsInput | $Enums.Jour;
    heureDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    heureFin?: Prisma.StringFieldUpdateOperationsInput | string;
    salle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    professeurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EmploiTempsCreateManyMatiereInput = {
    id?: string;
    jour: $Enums.Jour;
    heureDebut: string;
    heureFin: string;
    salle?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classeId: string;
    professeurId?: string | null;
};
export type EmploiTempsUpdateWithoutMatiereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jour?: Prisma.EnumJourFieldUpdateOperationsInput | $Enums.Jour;
    heureDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    heureFin?: Prisma.StringFieldUpdateOperationsInput | string;
    salle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classe?: Prisma.ClasseUpdateOneRequiredWithoutEmploisTempsNestedInput;
    professeur?: Prisma.ProfesseurUpdateOneWithoutEmploisTempsNestedInput;
};
export type EmploiTempsUncheckedUpdateWithoutMatiereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jour?: Prisma.EnumJourFieldUpdateOperationsInput | $Enums.Jour;
    heureDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    heureFin?: Prisma.StringFieldUpdateOperationsInput | string;
    salle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classeId?: Prisma.StringFieldUpdateOperationsInput | string;
    professeurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EmploiTempsUncheckedUpdateManyWithoutMatiereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jour?: Prisma.EnumJourFieldUpdateOperationsInput | $Enums.Jour;
    heureDebut?: Prisma.StringFieldUpdateOperationsInput | string;
    heureFin?: Prisma.StringFieldUpdateOperationsInput | string;
    salle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classeId?: Prisma.StringFieldUpdateOperationsInput | string;
    professeurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EmploiTempsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jour?: boolean;
    heureDebut?: boolean;
    heureFin?: boolean;
    salle?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    classeId?: boolean;
    matiereId?: boolean;
    professeurId?: boolean;
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.MatiereDefaultArgs<ExtArgs>;
    professeur?: boolean | Prisma.EmploiTemps$professeurArgs<ExtArgs>;
}, ExtArgs["result"]["emploiTemps"]>;
export type EmploiTempsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jour?: boolean;
    heureDebut?: boolean;
    heureFin?: boolean;
    salle?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    classeId?: boolean;
    matiereId?: boolean;
    professeurId?: boolean;
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.MatiereDefaultArgs<ExtArgs>;
    professeur?: boolean | Prisma.EmploiTemps$professeurArgs<ExtArgs>;
}, ExtArgs["result"]["emploiTemps"]>;
export type EmploiTempsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jour?: boolean;
    heureDebut?: boolean;
    heureFin?: boolean;
    salle?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    classeId?: boolean;
    matiereId?: boolean;
    professeurId?: boolean;
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.MatiereDefaultArgs<ExtArgs>;
    professeur?: boolean | Prisma.EmploiTemps$professeurArgs<ExtArgs>;
}, ExtArgs["result"]["emploiTemps"]>;
export type EmploiTempsSelectScalar = {
    id?: boolean;
    jour?: boolean;
    heureDebut?: boolean;
    heureFin?: boolean;
    salle?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    classeId?: boolean;
    matiereId?: boolean;
    professeurId?: boolean;
};
export type EmploiTempsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "jour" | "heureDebut" | "heureFin" | "salle" | "createdAt" | "updatedAt" | "classeId" | "matiereId" | "professeurId", ExtArgs["result"]["emploiTemps"]>;
export type EmploiTempsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.MatiereDefaultArgs<ExtArgs>;
    professeur?: boolean | Prisma.EmploiTemps$professeurArgs<ExtArgs>;
};
export type EmploiTempsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.MatiereDefaultArgs<ExtArgs>;
    professeur?: boolean | Prisma.EmploiTemps$professeurArgs<ExtArgs>;
};
export type EmploiTempsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.MatiereDefaultArgs<ExtArgs>;
    professeur?: boolean | Prisma.EmploiTemps$professeurArgs<ExtArgs>;
};
export type $EmploiTempsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EmploiTemps";
    objects: {
        classe: Prisma.$ClassePayload<ExtArgs>;
        matiere: Prisma.$MatierePayload<ExtArgs>;
        professeur: Prisma.$ProfesseurPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        jour: $Enums.Jour;
        heureDebut: string;
        heureFin: string;
        salle: string | null;
        createdAt: Date;
        updatedAt: Date;
        classeId: string;
        matiereId: string;
        professeurId: string | null;
    }, ExtArgs["result"]["emploiTemps"]>;
    composites: {};
};
export type EmploiTempsGetPayload<S extends boolean | null | undefined | EmploiTempsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EmploiTempsPayload, S>;
export type EmploiTempsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EmploiTempsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmploiTempsCountAggregateInputType | true;
};
export interface EmploiTempsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EmploiTemps'];
        meta: {
            name: 'EmploiTemps';
        };
    };
    findUnique<T extends EmploiTempsFindUniqueArgs>(args: Prisma.SelectSubset<T, EmploiTempsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EmploiTempsClient<runtime.Types.Result.GetResult<Prisma.$EmploiTempsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EmploiTempsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EmploiTempsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmploiTempsClient<runtime.Types.Result.GetResult<Prisma.$EmploiTempsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EmploiTempsFindFirstArgs>(args?: Prisma.SelectSubset<T, EmploiTempsFindFirstArgs<ExtArgs>>): Prisma.Prisma__EmploiTempsClient<runtime.Types.Result.GetResult<Prisma.$EmploiTempsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EmploiTempsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EmploiTempsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmploiTempsClient<runtime.Types.Result.GetResult<Prisma.$EmploiTempsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EmploiTempsFindManyArgs>(args?: Prisma.SelectSubset<T, EmploiTempsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmploiTempsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EmploiTempsCreateArgs>(args: Prisma.SelectSubset<T, EmploiTempsCreateArgs<ExtArgs>>): Prisma.Prisma__EmploiTempsClient<runtime.Types.Result.GetResult<Prisma.$EmploiTempsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EmploiTempsCreateManyArgs>(args?: Prisma.SelectSubset<T, EmploiTempsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EmploiTempsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EmploiTempsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmploiTempsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EmploiTempsDeleteArgs>(args: Prisma.SelectSubset<T, EmploiTempsDeleteArgs<ExtArgs>>): Prisma.Prisma__EmploiTempsClient<runtime.Types.Result.GetResult<Prisma.$EmploiTempsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EmploiTempsUpdateArgs>(args: Prisma.SelectSubset<T, EmploiTempsUpdateArgs<ExtArgs>>): Prisma.Prisma__EmploiTempsClient<runtime.Types.Result.GetResult<Prisma.$EmploiTempsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EmploiTempsDeleteManyArgs>(args?: Prisma.SelectSubset<T, EmploiTempsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EmploiTempsUpdateManyArgs>(args: Prisma.SelectSubset<T, EmploiTempsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EmploiTempsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EmploiTempsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmploiTempsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EmploiTempsUpsertArgs>(args: Prisma.SelectSubset<T, EmploiTempsUpsertArgs<ExtArgs>>): Prisma.Prisma__EmploiTempsClient<runtime.Types.Result.GetResult<Prisma.$EmploiTempsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EmploiTempsCountArgs>(args?: Prisma.Subset<T, EmploiTempsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EmploiTempsCountAggregateOutputType> : number>;
    aggregate<T extends EmploiTempsAggregateArgs>(args: Prisma.Subset<T, EmploiTempsAggregateArgs>): Prisma.PrismaPromise<GetEmploiTempsAggregateType<T>>;
    groupBy<T extends EmploiTempsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EmploiTempsGroupByArgs['orderBy'];
    } : {
        orderBy?: EmploiTempsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EmploiTempsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmploiTempsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EmploiTempsFieldRefs;
}
export interface Prisma__EmploiTempsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    classe<T extends Prisma.ClasseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClasseDefaultArgs<ExtArgs>>): Prisma.Prisma__ClasseClient<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    matiere<T extends Prisma.MatiereDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MatiereDefaultArgs<ExtArgs>>): Prisma.Prisma__MatiereClient<runtime.Types.Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    professeur<T extends Prisma.EmploiTemps$professeurArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmploiTemps$professeurArgs<ExtArgs>>): Prisma.Prisma__ProfesseurClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EmploiTempsFieldRefs {
    readonly id: Prisma.FieldRef<"EmploiTemps", 'String'>;
    readonly jour: Prisma.FieldRef<"EmploiTemps", 'Jour'>;
    readonly heureDebut: Prisma.FieldRef<"EmploiTemps", 'String'>;
    readonly heureFin: Prisma.FieldRef<"EmploiTemps", 'String'>;
    readonly salle: Prisma.FieldRef<"EmploiTemps", 'String'>;
    readonly createdAt: Prisma.FieldRef<"EmploiTemps", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"EmploiTemps", 'DateTime'>;
    readonly classeId: Prisma.FieldRef<"EmploiTemps", 'String'>;
    readonly matiereId: Prisma.FieldRef<"EmploiTemps", 'String'>;
    readonly professeurId: Prisma.FieldRef<"EmploiTemps", 'String'>;
}
export type EmploiTempsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmploiTempsSelect<ExtArgs> | null;
    omit?: Prisma.EmploiTempsOmit<ExtArgs> | null;
    include?: Prisma.EmploiTempsInclude<ExtArgs> | null;
    where: Prisma.EmploiTempsWhereUniqueInput;
};
export type EmploiTempsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmploiTempsSelect<ExtArgs> | null;
    omit?: Prisma.EmploiTempsOmit<ExtArgs> | null;
    include?: Prisma.EmploiTempsInclude<ExtArgs> | null;
    where: Prisma.EmploiTempsWhereUniqueInput;
};
export type EmploiTempsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmploiTempsSelect<ExtArgs> | null;
    omit?: Prisma.EmploiTempsOmit<ExtArgs> | null;
    include?: Prisma.EmploiTempsInclude<ExtArgs> | null;
    where?: Prisma.EmploiTempsWhereInput;
    orderBy?: Prisma.EmploiTempsOrderByWithRelationInput | Prisma.EmploiTempsOrderByWithRelationInput[];
    cursor?: Prisma.EmploiTempsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmploiTempsScalarFieldEnum | Prisma.EmploiTempsScalarFieldEnum[];
};
export type EmploiTempsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmploiTempsSelect<ExtArgs> | null;
    omit?: Prisma.EmploiTempsOmit<ExtArgs> | null;
    include?: Prisma.EmploiTempsInclude<ExtArgs> | null;
    where?: Prisma.EmploiTempsWhereInput;
    orderBy?: Prisma.EmploiTempsOrderByWithRelationInput | Prisma.EmploiTempsOrderByWithRelationInput[];
    cursor?: Prisma.EmploiTempsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmploiTempsScalarFieldEnum | Prisma.EmploiTempsScalarFieldEnum[];
};
export type EmploiTempsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmploiTempsSelect<ExtArgs> | null;
    omit?: Prisma.EmploiTempsOmit<ExtArgs> | null;
    include?: Prisma.EmploiTempsInclude<ExtArgs> | null;
    where?: Prisma.EmploiTempsWhereInput;
    orderBy?: Prisma.EmploiTempsOrderByWithRelationInput | Prisma.EmploiTempsOrderByWithRelationInput[];
    cursor?: Prisma.EmploiTempsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmploiTempsScalarFieldEnum | Prisma.EmploiTempsScalarFieldEnum[];
};
export type EmploiTempsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmploiTempsSelect<ExtArgs> | null;
    omit?: Prisma.EmploiTempsOmit<ExtArgs> | null;
    include?: Prisma.EmploiTempsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmploiTempsCreateInput, Prisma.EmploiTempsUncheckedCreateInput>;
};
export type EmploiTempsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EmploiTempsCreateManyInput | Prisma.EmploiTempsCreateManyInput[];
};
export type EmploiTempsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmploiTempsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmploiTempsOmit<ExtArgs> | null;
    data: Prisma.EmploiTempsCreateManyInput | Prisma.EmploiTempsCreateManyInput[];
    include?: Prisma.EmploiTempsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EmploiTempsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmploiTempsSelect<ExtArgs> | null;
    omit?: Prisma.EmploiTempsOmit<ExtArgs> | null;
    include?: Prisma.EmploiTempsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmploiTempsUpdateInput, Prisma.EmploiTempsUncheckedUpdateInput>;
    where: Prisma.EmploiTempsWhereUniqueInput;
};
export type EmploiTempsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EmploiTempsUpdateManyMutationInput, Prisma.EmploiTempsUncheckedUpdateManyInput>;
    where?: Prisma.EmploiTempsWhereInput;
    limit?: number;
};
export type EmploiTempsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmploiTempsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmploiTempsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmploiTempsUpdateManyMutationInput, Prisma.EmploiTempsUncheckedUpdateManyInput>;
    where?: Prisma.EmploiTempsWhereInput;
    limit?: number;
    include?: Prisma.EmploiTempsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EmploiTempsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmploiTempsSelect<ExtArgs> | null;
    omit?: Prisma.EmploiTempsOmit<ExtArgs> | null;
    include?: Prisma.EmploiTempsInclude<ExtArgs> | null;
    where: Prisma.EmploiTempsWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmploiTempsCreateInput, Prisma.EmploiTempsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EmploiTempsUpdateInput, Prisma.EmploiTempsUncheckedUpdateInput>;
};
export type EmploiTempsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmploiTempsSelect<ExtArgs> | null;
    omit?: Prisma.EmploiTempsOmit<ExtArgs> | null;
    include?: Prisma.EmploiTempsInclude<ExtArgs> | null;
    where: Prisma.EmploiTempsWhereUniqueInput;
};
export type EmploiTempsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmploiTempsWhereInput;
    limit?: number;
};
export type EmploiTemps$professeurArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurInclude<ExtArgs> | null;
    where?: Prisma.ProfesseurWhereInput;
};
export type EmploiTempsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmploiTempsSelect<ExtArgs> | null;
    omit?: Prisma.EmploiTempsOmit<ExtArgs> | null;
    include?: Prisma.EmploiTempsInclude<ExtArgs> | null;
};

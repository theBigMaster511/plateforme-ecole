import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProfesseurModel = runtime.Types.Result.DefaultSelection<Prisma.$ProfesseurPayload>;
export type AggregateProfesseur = {
    _count: ProfesseurCountAggregateOutputType | null;
    _min: ProfesseurMinAggregateOutputType | null;
    _max: ProfesseurMaxAggregateOutputType | null;
};
export type ProfesseurMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    specialite: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProfesseurMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    specialite: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProfesseurCountAggregateOutputType = {
    id: number;
    userId: number;
    specialite: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProfesseurMinAggregateInputType = {
    id?: true;
    userId?: true;
    specialite?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProfesseurMaxAggregateInputType = {
    id?: true;
    userId?: true;
    specialite?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProfesseurCountAggregateInputType = {
    id?: true;
    userId?: true;
    specialite?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProfesseurAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfesseurWhereInput;
    orderBy?: Prisma.ProfesseurOrderByWithRelationInput | Prisma.ProfesseurOrderByWithRelationInput[];
    cursor?: Prisma.ProfesseurWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProfesseurCountAggregateInputType;
    _min?: ProfesseurMinAggregateInputType;
    _max?: ProfesseurMaxAggregateInputType;
};
export type GetProfesseurAggregateType<T extends ProfesseurAggregateArgs> = {
    [P in keyof T & keyof AggregateProfesseur]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProfesseur[P]> : Prisma.GetScalarType<T[P], AggregateProfesseur[P]>;
};
export type ProfesseurGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfesseurWhereInput;
    orderBy?: Prisma.ProfesseurOrderByWithAggregationInput | Prisma.ProfesseurOrderByWithAggregationInput[];
    by: Prisma.ProfesseurScalarFieldEnum[] | Prisma.ProfesseurScalarFieldEnum;
    having?: Prisma.ProfesseurScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfesseurCountAggregateInputType | true;
    _min?: ProfesseurMinAggregateInputType;
    _max?: ProfesseurMaxAggregateInputType;
};
export type ProfesseurGroupByOutputType = {
    id: string;
    userId: string;
    specialite: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ProfesseurCountAggregateOutputType | null;
    _min: ProfesseurMinAggregateOutputType | null;
    _max: ProfesseurMaxAggregateOutputType | null;
};
export type GetProfesseurGroupByPayload<T extends ProfesseurGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProfesseurGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProfesseurGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProfesseurGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProfesseurGroupByOutputType[P]>;
}>>;
export type ProfesseurWhereInput = {
    AND?: Prisma.ProfesseurWhereInput | Prisma.ProfesseurWhereInput[];
    OR?: Prisma.ProfesseurWhereInput[];
    NOT?: Prisma.ProfesseurWhereInput | Prisma.ProfesseurWhereInput[];
    id?: Prisma.StringFilter<"Professeur"> | string;
    userId?: Prisma.StringFilter<"Professeur"> | string;
    specialite?: Prisma.StringNullableFilter<"Professeur"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Professeur"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Professeur"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    matieres?: Prisma.ProfesseurMatiereListRelationFilter;
    evaluations?: Prisma.EvaluationListRelationFilter;
};
export type ProfesseurOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    specialite?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    matieres?: Prisma.ProfesseurMatiereOrderByRelationAggregateInput;
    evaluations?: Prisma.EvaluationOrderByRelationAggregateInput;
};
export type ProfesseurWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.ProfesseurWhereInput | Prisma.ProfesseurWhereInput[];
    OR?: Prisma.ProfesseurWhereInput[];
    NOT?: Prisma.ProfesseurWhereInput | Prisma.ProfesseurWhereInput[];
    specialite?: Prisma.StringNullableFilter<"Professeur"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Professeur"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Professeur"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    matieres?: Prisma.ProfesseurMatiereListRelationFilter;
    evaluations?: Prisma.EvaluationListRelationFilter;
}, "id" | "userId">;
export type ProfesseurOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    specialite?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProfesseurCountOrderByAggregateInput;
    _max?: Prisma.ProfesseurMaxOrderByAggregateInput;
    _min?: Prisma.ProfesseurMinOrderByAggregateInput;
};
export type ProfesseurScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProfesseurScalarWhereWithAggregatesInput | Prisma.ProfesseurScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProfesseurScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProfesseurScalarWhereWithAggregatesInput | Prisma.ProfesseurScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Professeur"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Professeur"> | string;
    specialite?: Prisma.StringNullableWithAggregatesFilter<"Professeur"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Professeur"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Professeur"> | Date | string;
};
export type ProfesseurCreateInput = {
    id?: string;
    specialite?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutProfesseurInput;
    matieres?: Prisma.ProfesseurMatiereCreateNestedManyWithoutProfesseurInput;
    evaluations?: Prisma.EvaluationCreateNestedManyWithoutProfesseurInput;
};
export type ProfesseurUncheckedCreateInput = {
    id?: string;
    userId: string;
    specialite?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matieres?: Prisma.ProfesseurMatiereUncheckedCreateNestedManyWithoutProfesseurInput;
    evaluations?: Prisma.EvaluationUncheckedCreateNestedManyWithoutProfesseurInput;
};
export type ProfesseurUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    specialite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProfesseurNestedInput;
    matieres?: Prisma.ProfesseurMatiereUpdateManyWithoutProfesseurNestedInput;
    evaluations?: Prisma.EvaluationUpdateManyWithoutProfesseurNestedInput;
};
export type ProfesseurUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    specialite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matieres?: Prisma.ProfesseurMatiereUncheckedUpdateManyWithoutProfesseurNestedInput;
    evaluations?: Prisma.EvaluationUncheckedUpdateManyWithoutProfesseurNestedInput;
};
export type ProfesseurCreateManyInput = {
    id?: string;
    userId: string;
    specialite?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProfesseurUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    specialite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfesseurUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    specialite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfesseurNullableScalarRelationFilter = {
    is?: Prisma.ProfesseurWhereInput | null;
    isNot?: Prisma.ProfesseurWhereInput | null;
};
export type ProfesseurCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    specialite?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProfesseurMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    specialite?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProfesseurMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    specialite?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProfesseurScalarRelationFilter = {
    is?: Prisma.ProfesseurWhereInput;
    isNot?: Prisma.ProfesseurWhereInput;
};
export type ProfesseurCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ProfesseurCreateWithoutUserInput, Prisma.ProfesseurUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ProfesseurCreateOrConnectWithoutUserInput;
    connect?: Prisma.ProfesseurWhereUniqueInput;
};
export type ProfesseurUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ProfesseurCreateWithoutUserInput, Prisma.ProfesseurUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ProfesseurCreateOrConnectWithoutUserInput;
    connect?: Prisma.ProfesseurWhereUniqueInput;
};
export type ProfesseurUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ProfesseurCreateWithoutUserInput, Prisma.ProfesseurUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ProfesseurCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ProfesseurUpsertWithoutUserInput;
    disconnect?: Prisma.ProfesseurWhereInput | boolean;
    delete?: Prisma.ProfesseurWhereInput | boolean;
    connect?: Prisma.ProfesseurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfesseurUpdateToOneWithWhereWithoutUserInput, Prisma.ProfesseurUpdateWithoutUserInput>, Prisma.ProfesseurUncheckedUpdateWithoutUserInput>;
};
export type ProfesseurUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ProfesseurCreateWithoutUserInput, Prisma.ProfesseurUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ProfesseurCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ProfesseurUpsertWithoutUserInput;
    disconnect?: Prisma.ProfesseurWhereInput | boolean;
    delete?: Prisma.ProfesseurWhereInput | boolean;
    connect?: Prisma.ProfesseurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfesseurUpdateToOneWithWhereWithoutUserInput, Prisma.ProfesseurUpdateWithoutUserInput>, Prisma.ProfesseurUncheckedUpdateWithoutUserInput>;
};
export type ProfesseurCreateNestedOneWithoutMatieresInput = {
    create?: Prisma.XOR<Prisma.ProfesseurCreateWithoutMatieresInput, Prisma.ProfesseurUncheckedCreateWithoutMatieresInput>;
    connectOrCreate?: Prisma.ProfesseurCreateOrConnectWithoutMatieresInput;
    connect?: Prisma.ProfesseurWhereUniqueInput;
};
export type ProfesseurUpdateOneRequiredWithoutMatieresNestedInput = {
    create?: Prisma.XOR<Prisma.ProfesseurCreateWithoutMatieresInput, Prisma.ProfesseurUncheckedCreateWithoutMatieresInput>;
    connectOrCreate?: Prisma.ProfesseurCreateOrConnectWithoutMatieresInput;
    upsert?: Prisma.ProfesseurUpsertWithoutMatieresInput;
    connect?: Prisma.ProfesseurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfesseurUpdateToOneWithWhereWithoutMatieresInput, Prisma.ProfesseurUpdateWithoutMatieresInput>, Prisma.ProfesseurUncheckedUpdateWithoutMatieresInput>;
};
export type ProfesseurCreateNestedOneWithoutEvaluationsInput = {
    create?: Prisma.XOR<Prisma.ProfesseurCreateWithoutEvaluationsInput, Prisma.ProfesseurUncheckedCreateWithoutEvaluationsInput>;
    connectOrCreate?: Prisma.ProfesseurCreateOrConnectWithoutEvaluationsInput;
    connect?: Prisma.ProfesseurWhereUniqueInput;
};
export type ProfesseurUpdateOneRequiredWithoutEvaluationsNestedInput = {
    create?: Prisma.XOR<Prisma.ProfesseurCreateWithoutEvaluationsInput, Prisma.ProfesseurUncheckedCreateWithoutEvaluationsInput>;
    connectOrCreate?: Prisma.ProfesseurCreateOrConnectWithoutEvaluationsInput;
    upsert?: Prisma.ProfesseurUpsertWithoutEvaluationsInput;
    connect?: Prisma.ProfesseurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfesseurUpdateToOneWithWhereWithoutEvaluationsInput, Prisma.ProfesseurUpdateWithoutEvaluationsInput>, Prisma.ProfesseurUncheckedUpdateWithoutEvaluationsInput>;
};
export type ProfesseurCreateWithoutUserInput = {
    id?: string;
    specialite?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matieres?: Prisma.ProfesseurMatiereCreateNestedManyWithoutProfesseurInput;
    evaluations?: Prisma.EvaluationCreateNestedManyWithoutProfesseurInput;
};
export type ProfesseurUncheckedCreateWithoutUserInput = {
    id?: string;
    specialite?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matieres?: Prisma.ProfesseurMatiereUncheckedCreateNestedManyWithoutProfesseurInput;
    evaluations?: Prisma.EvaluationUncheckedCreateNestedManyWithoutProfesseurInput;
};
export type ProfesseurCreateOrConnectWithoutUserInput = {
    where: Prisma.ProfesseurWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfesseurCreateWithoutUserInput, Prisma.ProfesseurUncheckedCreateWithoutUserInput>;
};
export type ProfesseurUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.ProfesseurUpdateWithoutUserInput, Prisma.ProfesseurUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ProfesseurCreateWithoutUserInput, Prisma.ProfesseurUncheckedCreateWithoutUserInput>;
    where?: Prisma.ProfesseurWhereInput;
};
export type ProfesseurUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.ProfesseurWhereInput;
    data: Prisma.XOR<Prisma.ProfesseurUpdateWithoutUserInput, Prisma.ProfesseurUncheckedUpdateWithoutUserInput>;
};
export type ProfesseurUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    specialite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matieres?: Prisma.ProfesseurMatiereUpdateManyWithoutProfesseurNestedInput;
    evaluations?: Prisma.EvaluationUpdateManyWithoutProfesseurNestedInput;
};
export type ProfesseurUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    specialite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matieres?: Prisma.ProfesseurMatiereUncheckedUpdateManyWithoutProfesseurNestedInput;
    evaluations?: Prisma.EvaluationUncheckedUpdateManyWithoutProfesseurNestedInput;
};
export type ProfesseurCreateWithoutMatieresInput = {
    id?: string;
    specialite?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutProfesseurInput;
    evaluations?: Prisma.EvaluationCreateNestedManyWithoutProfesseurInput;
};
export type ProfesseurUncheckedCreateWithoutMatieresInput = {
    id?: string;
    userId: string;
    specialite?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    evaluations?: Prisma.EvaluationUncheckedCreateNestedManyWithoutProfesseurInput;
};
export type ProfesseurCreateOrConnectWithoutMatieresInput = {
    where: Prisma.ProfesseurWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfesseurCreateWithoutMatieresInput, Prisma.ProfesseurUncheckedCreateWithoutMatieresInput>;
};
export type ProfesseurUpsertWithoutMatieresInput = {
    update: Prisma.XOR<Prisma.ProfesseurUpdateWithoutMatieresInput, Prisma.ProfesseurUncheckedUpdateWithoutMatieresInput>;
    create: Prisma.XOR<Prisma.ProfesseurCreateWithoutMatieresInput, Prisma.ProfesseurUncheckedCreateWithoutMatieresInput>;
    where?: Prisma.ProfesseurWhereInput;
};
export type ProfesseurUpdateToOneWithWhereWithoutMatieresInput = {
    where?: Prisma.ProfesseurWhereInput;
    data: Prisma.XOR<Prisma.ProfesseurUpdateWithoutMatieresInput, Prisma.ProfesseurUncheckedUpdateWithoutMatieresInput>;
};
export type ProfesseurUpdateWithoutMatieresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    specialite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProfesseurNestedInput;
    evaluations?: Prisma.EvaluationUpdateManyWithoutProfesseurNestedInput;
};
export type ProfesseurUncheckedUpdateWithoutMatieresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    specialite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluations?: Prisma.EvaluationUncheckedUpdateManyWithoutProfesseurNestedInput;
};
export type ProfesseurCreateWithoutEvaluationsInput = {
    id?: string;
    specialite?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutProfesseurInput;
    matieres?: Prisma.ProfesseurMatiereCreateNestedManyWithoutProfesseurInput;
};
export type ProfesseurUncheckedCreateWithoutEvaluationsInput = {
    id?: string;
    userId: string;
    specialite?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matieres?: Prisma.ProfesseurMatiereUncheckedCreateNestedManyWithoutProfesseurInput;
};
export type ProfesseurCreateOrConnectWithoutEvaluationsInput = {
    where: Prisma.ProfesseurWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfesseurCreateWithoutEvaluationsInput, Prisma.ProfesseurUncheckedCreateWithoutEvaluationsInput>;
};
export type ProfesseurUpsertWithoutEvaluationsInput = {
    update: Prisma.XOR<Prisma.ProfesseurUpdateWithoutEvaluationsInput, Prisma.ProfesseurUncheckedUpdateWithoutEvaluationsInput>;
    create: Prisma.XOR<Prisma.ProfesseurCreateWithoutEvaluationsInput, Prisma.ProfesseurUncheckedCreateWithoutEvaluationsInput>;
    where?: Prisma.ProfesseurWhereInput;
};
export type ProfesseurUpdateToOneWithWhereWithoutEvaluationsInput = {
    where?: Prisma.ProfesseurWhereInput;
    data: Prisma.XOR<Prisma.ProfesseurUpdateWithoutEvaluationsInput, Prisma.ProfesseurUncheckedUpdateWithoutEvaluationsInput>;
};
export type ProfesseurUpdateWithoutEvaluationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    specialite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProfesseurNestedInput;
    matieres?: Prisma.ProfesseurMatiereUpdateManyWithoutProfesseurNestedInput;
};
export type ProfesseurUncheckedUpdateWithoutEvaluationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    specialite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matieres?: Prisma.ProfesseurMatiereUncheckedUpdateManyWithoutProfesseurNestedInput;
};
export type ProfesseurCountOutputType = {
    matieres: number;
    evaluations: number;
};
export type ProfesseurCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    matieres?: boolean | ProfesseurCountOutputTypeCountMatieresArgs;
    evaluations?: boolean | ProfesseurCountOutputTypeCountEvaluationsArgs;
};
export type ProfesseurCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurCountOutputTypeSelect<ExtArgs> | null;
};
export type ProfesseurCountOutputTypeCountMatieresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfesseurMatiereWhereInput;
};
export type ProfesseurCountOutputTypeCountEvaluationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationWhereInput;
};
export type ProfesseurSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    specialite?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    matieres?: boolean | Prisma.Professeur$matieresArgs<ExtArgs>;
    evaluations?: boolean | Prisma.Professeur$evaluationsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProfesseurCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["professeur"]>;
export type ProfesseurSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    specialite?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["professeur"]>;
export type ProfesseurSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    specialite?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["professeur"]>;
export type ProfesseurSelectScalar = {
    id?: boolean;
    userId?: boolean;
    specialite?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProfesseurOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "specialite" | "createdAt" | "updatedAt", ExtArgs["result"]["professeur"]>;
export type ProfesseurInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    matieres?: boolean | Prisma.Professeur$matieresArgs<ExtArgs>;
    evaluations?: boolean | Prisma.Professeur$evaluationsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProfesseurCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProfesseurIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ProfesseurIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ProfesseurPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Professeur";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        matieres: Prisma.$ProfesseurMatierePayload<ExtArgs>[];
        evaluations: Prisma.$EvaluationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        specialite: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["professeur"]>;
    composites: {};
};
export type ProfesseurGetPayload<S extends boolean | null | undefined | ProfesseurDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProfesseurPayload, S>;
export type ProfesseurCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProfesseurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProfesseurCountAggregateInputType | true;
};
export interface ProfesseurDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Professeur'];
        meta: {
            name: 'Professeur';
        };
    };
    findUnique<T extends ProfesseurFindUniqueArgs>(args: Prisma.SelectSubset<T, ProfesseurFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProfesseurClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProfesseurFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProfesseurFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfesseurClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProfesseurFindFirstArgs>(args?: Prisma.SelectSubset<T, ProfesseurFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProfesseurClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProfesseurFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProfesseurFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfesseurClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProfesseurFindManyArgs>(args?: Prisma.SelectSubset<T, ProfesseurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfesseurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProfesseurCreateArgs>(args: Prisma.SelectSubset<T, ProfesseurCreateArgs<ExtArgs>>): Prisma.Prisma__ProfesseurClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProfesseurCreateManyArgs>(args?: Prisma.SelectSubset<T, ProfesseurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProfesseurCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProfesseurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfesseurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProfesseurDeleteArgs>(args: Prisma.SelectSubset<T, ProfesseurDeleteArgs<ExtArgs>>): Prisma.Prisma__ProfesseurClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProfesseurUpdateArgs>(args: Prisma.SelectSubset<T, ProfesseurUpdateArgs<ExtArgs>>): Prisma.Prisma__ProfesseurClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProfesseurDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProfesseurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProfesseurUpdateManyArgs>(args: Prisma.SelectSubset<T, ProfesseurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProfesseurUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProfesseurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfesseurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProfesseurUpsertArgs>(args: Prisma.SelectSubset<T, ProfesseurUpsertArgs<ExtArgs>>): Prisma.Prisma__ProfesseurClient<runtime.Types.Result.GetResult<Prisma.$ProfesseurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProfesseurCountArgs>(args?: Prisma.Subset<T, ProfesseurCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProfesseurCountAggregateOutputType> : number>;
    aggregate<T extends ProfesseurAggregateArgs>(args: Prisma.Subset<T, ProfesseurAggregateArgs>): Prisma.PrismaPromise<GetProfesseurAggregateType<T>>;
    groupBy<T extends ProfesseurGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProfesseurGroupByArgs['orderBy'];
    } : {
        orderBy?: ProfesseurGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProfesseurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfesseurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProfesseurFieldRefs;
}
export interface Prisma__ProfesseurClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    matieres<T extends Prisma.Professeur$matieresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Professeur$matieresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfesseurMatierePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    evaluations<T extends Prisma.Professeur$evaluationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Professeur$evaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProfesseurFieldRefs {
    readonly id: Prisma.FieldRef<"Professeur", 'String'>;
    readonly userId: Prisma.FieldRef<"Professeur", 'String'>;
    readonly specialite: Prisma.FieldRef<"Professeur", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Professeur", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Professeur", 'DateTime'>;
}
export type ProfesseurFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurInclude<ExtArgs> | null;
    where: Prisma.ProfesseurWhereUniqueInput;
};
export type ProfesseurFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurInclude<ExtArgs> | null;
    where: Prisma.ProfesseurWhereUniqueInput;
};
export type ProfesseurFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurInclude<ExtArgs> | null;
    where?: Prisma.ProfesseurWhereInput;
    orderBy?: Prisma.ProfesseurOrderByWithRelationInput | Prisma.ProfesseurOrderByWithRelationInput[];
    cursor?: Prisma.ProfesseurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfesseurScalarFieldEnum | Prisma.ProfesseurScalarFieldEnum[];
};
export type ProfesseurFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurInclude<ExtArgs> | null;
    where?: Prisma.ProfesseurWhereInput;
    orderBy?: Prisma.ProfesseurOrderByWithRelationInput | Prisma.ProfesseurOrderByWithRelationInput[];
    cursor?: Prisma.ProfesseurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfesseurScalarFieldEnum | Prisma.ProfesseurScalarFieldEnum[];
};
export type ProfesseurFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurInclude<ExtArgs> | null;
    where?: Prisma.ProfesseurWhereInput;
    orderBy?: Prisma.ProfesseurOrderByWithRelationInput | Prisma.ProfesseurOrderByWithRelationInput[];
    cursor?: Prisma.ProfesseurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfesseurScalarFieldEnum | Prisma.ProfesseurScalarFieldEnum[];
};
export type ProfesseurCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfesseurCreateInput, Prisma.ProfesseurUncheckedCreateInput>;
};
export type ProfesseurCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProfesseurCreateManyInput | Prisma.ProfesseurCreateManyInput[];
};
export type ProfesseurCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProfesseurOmit<ExtArgs> | null;
    data: Prisma.ProfesseurCreateManyInput | Prisma.ProfesseurCreateManyInput[];
    include?: Prisma.ProfesseurIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProfesseurUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfesseurUpdateInput, Prisma.ProfesseurUncheckedUpdateInput>;
    where: Prisma.ProfesseurWhereUniqueInput;
};
export type ProfesseurUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProfesseurUpdateManyMutationInput, Prisma.ProfesseurUncheckedUpdateManyInput>;
    where?: Prisma.ProfesseurWhereInput;
    limit?: number;
};
export type ProfesseurUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProfesseurOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfesseurUpdateManyMutationInput, Prisma.ProfesseurUncheckedUpdateManyInput>;
    where?: Prisma.ProfesseurWhereInput;
    limit?: number;
    include?: Prisma.ProfesseurIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProfesseurUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurInclude<ExtArgs> | null;
    where: Prisma.ProfesseurWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfesseurCreateInput, Prisma.ProfesseurUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProfesseurUpdateInput, Prisma.ProfesseurUncheckedUpdateInput>;
};
export type ProfesseurDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurInclude<ExtArgs> | null;
    where: Prisma.ProfesseurWhereUniqueInput;
};
export type ProfesseurDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfesseurWhereInput;
    limit?: number;
};
export type Professeur$matieresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Professeur$evaluationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProfesseurDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesseurSelect<ExtArgs> | null;
    omit?: Prisma.ProfesseurOmit<ExtArgs> | null;
    include?: Prisma.ProfesseurInclude<ExtArgs> | null;
};

import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ClasseModel = runtime.Types.Result.DefaultSelection<Prisma.$ClassePayload>;
export type AggregateClasse = {
    _count: ClasseCountAggregateOutputType | null;
    _min: ClasseMinAggregateOutputType | null;
    _max: ClasseMaxAggregateOutputType | null;
};
export type ClasseMinAggregateOutputType = {
    id: string | null;
    nom: string | null;
    niveau: string | null;
    annee: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClasseMaxAggregateOutputType = {
    id: string | null;
    nom: string | null;
    niveau: string | null;
    annee: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClasseCountAggregateOutputType = {
    id: number;
    nom: number;
    niveau: number;
    annee: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ClasseMinAggregateInputType = {
    id?: true;
    nom?: true;
    niveau?: true;
    annee?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClasseMaxAggregateInputType = {
    id?: true;
    nom?: true;
    niveau?: true;
    annee?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClasseCountAggregateInputType = {
    id?: true;
    nom?: true;
    niveau?: true;
    annee?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ClasseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClasseWhereInput;
    orderBy?: Prisma.ClasseOrderByWithRelationInput | Prisma.ClasseOrderByWithRelationInput[];
    cursor?: Prisma.ClasseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClasseCountAggregateInputType;
    _min?: ClasseMinAggregateInputType;
    _max?: ClasseMaxAggregateInputType;
};
export type GetClasseAggregateType<T extends ClasseAggregateArgs> = {
    [P in keyof T & keyof AggregateClasse]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClasse[P]> : Prisma.GetScalarType<T[P], AggregateClasse[P]>;
};
export type ClasseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClasseWhereInput;
    orderBy?: Prisma.ClasseOrderByWithAggregationInput | Prisma.ClasseOrderByWithAggregationInput[];
    by: Prisma.ClasseScalarFieldEnum[] | Prisma.ClasseScalarFieldEnum;
    having?: Prisma.ClasseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClasseCountAggregateInputType | true;
    _min?: ClasseMinAggregateInputType;
    _max?: ClasseMaxAggregateInputType;
};
export type ClasseGroupByOutputType = {
    id: string;
    nom: string;
    niveau: string;
    annee: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ClasseCountAggregateOutputType | null;
    _min: ClasseMinAggregateOutputType | null;
    _max: ClasseMaxAggregateOutputType | null;
};
export type GetClasseGroupByPayload<T extends ClasseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClasseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClasseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClasseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClasseGroupByOutputType[P]>;
}>>;
export type ClasseWhereInput = {
    AND?: Prisma.ClasseWhereInput | Prisma.ClasseWhereInput[];
    OR?: Prisma.ClasseWhereInput[];
    NOT?: Prisma.ClasseWhereInput | Prisma.ClasseWhereInput[];
    id?: Prisma.StringFilter<"Classe"> | string;
    nom?: Prisma.StringFilter<"Classe"> | string;
    niveau?: Prisma.StringFilter<"Classe"> | string;
    annee?: Prisma.StringFilter<"Classe"> | string;
    createdAt?: Prisma.DateTimeFilter<"Classe"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Classe"> | Date | string;
    eleves?: Prisma.EleveListRelationFilter;
    matieres?: Prisma.MatiereListRelationFilter;
};
export type ClasseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    niveau?: Prisma.SortOrder;
    annee?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    eleves?: Prisma.EleveOrderByRelationAggregateInput;
    matieres?: Prisma.MatiereOrderByRelationAggregateInput;
};
export type ClasseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ClasseWhereInput | Prisma.ClasseWhereInput[];
    OR?: Prisma.ClasseWhereInput[];
    NOT?: Prisma.ClasseWhereInput | Prisma.ClasseWhereInput[];
    nom?: Prisma.StringFilter<"Classe"> | string;
    niveau?: Prisma.StringFilter<"Classe"> | string;
    annee?: Prisma.StringFilter<"Classe"> | string;
    createdAt?: Prisma.DateTimeFilter<"Classe"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Classe"> | Date | string;
    eleves?: Prisma.EleveListRelationFilter;
    matieres?: Prisma.MatiereListRelationFilter;
}, "id">;
export type ClasseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    niveau?: Prisma.SortOrder;
    annee?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ClasseCountOrderByAggregateInput;
    _max?: Prisma.ClasseMaxOrderByAggregateInput;
    _min?: Prisma.ClasseMinOrderByAggregateInput;
};
export type ClasseScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClasseScalarWhereWithAggregatesInput | Prisma.ClasseScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClasseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClasseScalarWhereWithAggregatesInput | Prisma.ClasseScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Classe"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"Classe"> | string;
    niveau?: Prisma.StringWithAggregatesFilter<"Classe"> | string;
    annee?: Prisma.StringWithAggregatesFilter<"Classe"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Classe"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Classe"> | Date | string;
};
export type ClasseCreateInput = {
    id?: string;
    nom: string;
    niveau: string;
    annee: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    eleves?: Prisma.EleveCreateNestedManyWithoutClasseInput;
    matieres?: Prisma.MatiereCreateNestedManyWithoutClasseInput;
};
export type ClasseUncheckedCreateInput = {
    id?: string;
    nom: string;
    niveau: string;
    annee: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    eleves?: Prisma.EleveUncheckedCreateNestedManyWithoutClasseInput;
    matieres?: Prisma.MatiereUncheckedCreateNestedManyWithoutClasseInput;
};
export type ClasseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    niveau?: Prisma.StringFieldUpdateOperationsInput | string;
    annee?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eleves?: Prisma.EleveUpdateManyWithoutClasseNestedInput;
    matieres?: Prisma.MatiereUpdateManyWithoutClasseNestedInput;
};
export type ClasseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    niveau?: Prisma.StringFieldUpdateOperationsInput | string;
    annee?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eleves?: Prisma.EleveUncheckedUpdateManyWithoutClasseNestedInput;
    matieres?: Prisma.MatiereUncheckedUpdateManyWithoutClasseNestedInput;
};
export type ClasseCreateManyInput = {
    id?: string;
    nom: string;
    niveau: string;
    annee: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClasseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    niveau?: Prisma.StringFieldUpdateOperationsInput | string;
    annee?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClasseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    niveau?: Prisma.StringFieldUpdateOperationsInput | string;
    annee?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClasseNullableScalarRelationFilter = {
    is?: Prisma.ClasseWhereInput | null;
    isNot?: Prisma.ClasseWhereInput | null;
};
export type ClasseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    niveau?: Prisma.SortOrder;
    annee?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClasseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    niveau?: Prisma.SortOrder;
    annee?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClasseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    niveau?: Prisma.SortOrder;
    annee?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClasseScalarRelationFilter = {
    is?: Prisma.ClasseWhereInput;
    isNot?: Prisma.ClasseWhereInput;
};
export type ClasseCreateNestedOneWithoutElevesInput = {
    create?: Prisma.XOR<Prisma.ClasseCreateWithoutElevesInput, Prisma.ClasseUncheckedCreateWithoutElevesInput>;
    connectOrCreate?: Prisma.ClasseCreateOrConnectWithoutElevesInput;
    connect?: Prisma.ClasseWhereUniqueInput;
};
export type ClasseUpdateOneWithoutElevesNestedInput = {
    create?: Prisma.XOR<Prisma.ClasseCreateWithoutElevesInput, Prisma.ClasseUncheckedCreateWithoutElevesInput>;
    connectOrCreate?: Prisma.ClasseCreateOrConnectWithoutElevesInput;
    upsert?: Prisma.ClasseUpsertWithoutElevesInput;
    disconnect?: Prisma.ClasseWhereInput | boolean;
    delete?: Prisma.ClasseWhereInput | boolean;
    connect?: Prisma.ClasseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClasseUpdateToOneWithWhereWithoutElevesInput, Prisma.ClasseUpdateWithoutElevesInput>, Prisma.ClasseUncheckedUpdateWithoutElevesInput>;
};
export type ClasseCreateNestedOneWithoutMatieresInput = {
    create?: Prisma.XOR<Prisma.ClasseCreateWithoutMatieresInput, Prisma.ClasseUncheckedCreateWithoutMatieresInput>;
    connectOrCreate?: Prisma.ClasseCreateOrConnectWithoutMatieresInput;
    connect?: Prisma.ClasseWhereUniqueInput;
};
export type ClasseUpdateOneRequiredWithoutMatieresNestedInput = {
    create?: Prisma.XOR<Prisma.ClasseCreateWithoutMatieresInput, Prisma.ClasseUncheckedCreateWithoutMatieresInput>;
    connectOrCreate?: Prisma.ClasseCreateOrConnectWithoutMatieresInput;
    upsert?: Prisma.ClasseUpsertWithoutMatieresInput;
    connect?: Prisma.ClasseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClasseUpdateToOneWithWhereWithoutMatieresInput, Prisma.ClasseUpdateWithoutMatieresInput>, Prisma.ClasseUncheckedUpdateWithoutMatieresInput>;
};
export type ClasseCreateWithoutElevesInput = {
    id?: string;
    nom: string;
    niveau: string;
    annee: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matieres?: Prisma.MatiereCreateNestedManyWithoutClasseInput;
};
export type ClasseUncheckedCreateWithoutElevesInput = {
    id?: string;
    nom: string;
    niveau: string;
    annee: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matieres?: Prisma.MatiereUncheckedCreateNestedManyWithoutClasseInput;
};
export type ClasseCreateOrConnectWithoutElevesInput = {
    where: Prisma.ClasseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClasseCreateWithoutElevesInput, Prisma.ClasseUncheckedCreateWithoutElevesInput>;
};
export type ClasseUpsertWithoutElevesInput = {
    update: Prisma.XOR<Prisma.ClasseUpdateWithoutElevesInput, Prisma.ClasseUncheckedUpdateWithoutElevesInput>;
    create: Prisma.XOR<Prisma.ClasseCreateWithoutElevesInput, Prisma.ClasseUncheckedCreateWithoutElevesInput>;
    where?: Prisma.ClasseWhereInput;
};
export type ClasseUpdateToOneWithWhereWithoutElevesInput = {
    where?: Prisma.ClasseWhereInput;
    data: Prisma.XOR<Prisma.ClasseUpdateWithoutElevesInput, Prisma.ClasseUncheckedUpdateWithoutElevesInput>;
};
export type ClasseUpdateWithoutElevesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    niveau?: Prisma.StringFieldUpdateOperationsInput | string;
    annee?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matieres?: Prisma.MatiereUpdateManyWithoutClasseNestedInput;
};
export type ClasseUncheckedUpdateWithoutElevesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    niveau?: Prisma.StringFieldUpdateOperationsInput | string;
    annee?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matieres?: Prisma.MatiereUncheckedUpdateManyWithoutClasseNestedInput;
};
export type ClasseCreateWithoutMatieresInput = {
    id?: string;
    nom: string;
    niveau: string;
    annee: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    eleves?: Prisma.EleveCreateNestedManyWithoutClasseInput;
};
export type ClasseUncheckedCreateWithoutMatieresInput = {
    id?: string;
    nom: string;
    niveau: string;
    annee: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    eleves?: Prisma.EleveUncheckedCreateNestedManyWithoutClasseInput;
};
export type ClasseCreateOrConnectWithoutMatieresInput = {
    where: Prisma.ClasseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClasseCreateWithoutMatieresInput, Prisma.ClasseUncheckedCreateWithoutMatieresInput>;
};
export type ClasseUpsertWithoutMatieresInput = {
    update: Prisma.XOR<Prisma.ClasseUpdateWithoutMatieresInput, Prisma.ClasseUncheckedUpdateWithoutMatieresInput>;
    create: Prisma.XOR<Prisma.ClasseCreateWithoutMatieresInput, Prisma.ClasseUncheckedCreateWithoutMatieresInput>;
    where?: Prisma.ClasseWhereInput;
};
export type ClasseUpdateToOneWithWhereWithoutMatieresInput = {
    where?: Prisma.ClasseWhereInput;
    data: Prisma.XOR<Prisma.ClasseUpdateWithoutMatieresInput, Prisma.ClasseUncheckedUpdateWithoutMatieresInput>;
};
export type ClasseUpdateWithoutMatieresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    niveau?: Prisma.StringFieldUpdateOperationsInput | string;
    annee?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eleves?: Prisma.EleveUpdateManyWithoutClasseNestedInput;
};
export type ClasseUncheckedUpdateWithoutMatieresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    niveau?: Prisma.StringFieldUpdateOperationsInput | string;
    annee?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eleves?: Prisma.EleveUncheckedUpdateManyWithoutClasseNestedInput;
};
export type ClasseCountOutputType = {
    eleves: number;
    matieres: number;
};
export type ClasseCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    eleves?: boolean | ClasseCountOutputTypeCountElevesArgs;
    matieres?: boolean | ClasseCountOutputTypeCountMatieresArgs;
};
export type ClasseCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseCountOutputTypeSelect<ExtArgs> | null;
};
export type ClasseCountOutputTypeCountElevesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EleveWhereInput;
};
export type ClasseCountOutputTypeCountMatieresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatiereWhereInput;
};
export type ClasseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    niveau?: boolean;
    annee?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    eleves?: boolean | Prisma.Classe$elevesArgs<ExtArgs>;
    matieres?: boolean | Prisma.Classe$matieresArgs<ExtArgs>;
    _count?: boolean | Prisma.ClasseCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["classe"]>;
export type ClasseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    niveau?: boolean;
    annee?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["classe"]>;
export type ClasseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    niveau?: boolean;
    annee?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["classe"]>;
export type ClasseSelectScalar = {
    id?: boolean;
    nom?: boolean;
    niveau?: boolean;
    annee?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ClasseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "niveau" | "annee" | "createdAt" | "updatedAt", ExtArgs["result"]["classe"]>;
export type ClasseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    eleves?: boolean | Prisma.Classe$elevesArgs<ExtArgs>;
    matieres?: boolean | Prisma.Classe$matieresArgs<ExtArgs>;
    _count?: boolean | Prisma.ClasseCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ClasseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ClasseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ClassePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Classe";
    objects: {
        eleves: Prisma.$ElevePayload<ExtArgs>[];
        matieres: Prisma.$MatierePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nom: string;
        niveau: string;
        annee: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["classe"]>;
    composites: {};
};
export type ClasseGetPayload<S extends boolean | null | undefined | ClasseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClassePayload, S>;
export type ClasseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClasseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClasseCountAggregateInputType | true;
};
export interface ClasseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Classe'];
        meta: {
            name: 'Classe';
        };
    };
    findUnique<T extends ClasseFindUniqueArgs>(args: Prisma.SelectSubset<T, ClasseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClasseClient<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClasseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClasseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClasseClient<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClasseFindFirstArgs>(args?: Prisma.SelectSubset<T, ClasseFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClasseClient<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClasseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClasseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClasseClient<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClasseFindManyArgs>(args?: Prisma.SelectSubset<T, ClasseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClasseCreateArgs>(args: Prisma.SelectSubset<T, ClasseCreateArgs<ExtArgs>>): Prisma.Prisma__ClasseClient<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClasseCreateManyArgs>(args?: Prisma.SelectSubset<T, ClasseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClasseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClasseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClasseDeleteArgs>(args: Prisma.SelectSubset<T, ClasseDeleteArgs<ExtArgs>>): Prisma.Prisma__ClasseClient<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClasseUpdateArgs>(args: Prisma.SelectSubset<T, ClasseUpdateArgs<ExtArgs>>): Prisma.Prisma__ClasseClient<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClasseDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClasseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClasseUpdateManyArgs>(args: Prisma.SelectSubset<T, ClasseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClasseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClasseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClasseUpsertArgs>(args: Prisma.SelectSubset<T, ClasseUpsertArgs<ExtArgs>>): Prisma.Prisma__ClasseClient<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClasseCountArgs>(args?: Prisma.Subset<T, ClasseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClasseCountAggregateOutputType> : number>;
    aggregate<T extends ClasseAggregateArgs>(args: Prisma.Subset<T, ClasseAggregateArgs>): Prisma.PrismaPromise<GetClasseAggregateType<T>>;
    groupBy<T extends ClasseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClasseGroupByArgs['orderBy'];
    } : {
        orderBy?: ClasseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClasseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClasseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClasseFieldRefs;
}
export interface Prisma__ClasseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    eleves<T extends Prisma.Classe$elevesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Classe$elevesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ElevePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    matieres<T extends Prisma.Classe$matieresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Classe$matieresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClasseFieldRefs {
    readonly id: Prisma.FieldRef<"Classe", 'String'>;
    readonly nom: Prisma.FieldRef<"Classe", 'String'>;
    readonly niveau: Prisma.FieldRef<"Classe", 'String'>;
    readonly annee: Prisma.FieldRef<"Classe", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Classe", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Classe", 'DateTime'>;
}
export type ClasseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseSelect<ExtArgs> | null;
    omit?: Prisma.ClasseOmit<ExtArgs> | null;
    include?: Prisma.ClasseInclude<ExtArgs> | null;
    where: Prisma.ClasseWhereUniqueInput;
};
export type ClasseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseSelect<ExtArgs> | null;
    omit?: Prisma.ClasseOmit<ExtArgs> | null;
    include?: Prisma.ClasseInclude<ExtArgs> | null;
    where: Prisma.ClasseWhereUniqueInput;
};
export type ClasseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseSelect<ExtArgs> | null;
    omit?: Prisma.ClasseOmit<ExtArgs> | null;
    include?: Prisma.ClasseInclude<ExtArgs> | null;
    where?: Prisma.ClasseWhereInput;
    orderBy?: Prisma.ClasseOrderByWithRelationInput | Prisma.ClasseOrderByWithRelationInput[];
    cursor?: Prisma.ClasseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClasseScalarFieldEnum | Prisma.ClasseScalarFieldEnum[];
};
export type ClasseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseSelect<ExtArgs> | null;
    omit?: Prisma.ClasseOmit<ExtArgs> | null;
    include?: Prisma.ClasseInclude<ExtArgs> | null;
    where?: Prisma.ClasseWhereInput;
    orderBy?: Prisma.ClasseOrderByWithRelationInput | Prisma.ClasseOrderByWithRelationInput[];
    cursor?: Prisma.ClasseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClasseScalarFieldEnum | Prisma.ClasseScalarFieldEnum[];
};
export type ClasseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseSelect<ExtArgs> | null;
    omit?: Prisma.ClasseOmit<ExtArgs> | null;
    include?: Prisma.ClasseInclude<ExtArgs> | null;
    where?: Prisma.ClasseWhereInput;
    orderBy?: Prisma.ClasseOrderByWithRelationInput | Prisma.ClasseOrderByWithRelationInput[];
    cursor?: Prisma.ClasseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClasseScalarFieldEnum | Prisma.ClasseScalarFieldEnum[];
};
export type ClasseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseSelect<ExtArgs> | null;
    omit?: Prisma.ClasseOmit<ExtArgs> | null;
    include?: Prisma.ClasseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClasseCreateInput, Prisma.ClasseUncheckedCreateInput>;
};
export type ClasseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClasseCreateManyInput | Prisma.ClasseCreateManyInput[];
};
export type ClasseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClasseOmit<ExtArgs> | null;
    data: Prisma.ClasseCreateManyInput | Prisma.ClasseCreateManyInput[];
};
export type ClasseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseSelect<ExtArgs> | null;
    omit?: Prisma.ClasseOmit<ExtArgs> | null;
    include?: Prisma.ClasseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClasseUpdateInput, Prisma.ClasseUncheckedUpdateInput>;
    where: Prisma.ClasseWhereUniqueInput;
};
export type ClasseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClasseUpdateManyMutationInput, Prisma.ClasseUncheckedUpdateManyInput>;
    where?: Prisma.ClasseWhereInput;
    limit?: number;
};
export type ClasseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClasseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClasseUpdateManyMutationInput, Prisma.ClasseUncheckedUpdateManyInput>;
    where?: Prisma.ClasseWhereInput;
    limit?: number;
};
export type ClasseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseSelect<ExtArgs> | null;
    omit?: Prisma.ClasseOmit<ExtArgs> | null;
    include?: Prisma.ClasseInclude<ExtArgs> | null;
    where: Prisma.ClasseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClasseCreateInput, Prisma.ClasseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClasseUpdateInput, Prisma.ClasseUncheckedUpdateInput>;
};
export type ClasseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseSelect<ExtArgs> | null;
    omit?: Prisma.ClasseOmit<ExtArgs> | null;
    include?: Prisma.ClasseInclude<ExtArgs> | null;
    where: Prisma.ClasseWhereUniqueInput;
};
export type ClasseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClasseWhereInput;
    limit?: number;
};
export type Classe$elevesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Classe$matieresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ClasseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseSelect<ExtArgs> | null;
    omit?: Prisma.ClasseOmit<ExtArgs> | null;
    include?: Prisma.ClasseInclude<ExtArgs> | null;
};

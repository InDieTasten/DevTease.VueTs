<template>
    <div>
        <h2>Input Grid</h2>
        <table>
            <tr>
                <!-- Table header -->
            </tr>
            <tr> <!-- Repeat row for each report row -->

            </tr>
        </table>
    </div>
</template>

<script lang='ts'>
    import { Component, Vue, Prop, Model, Watch } from 'vue-property-decorator';
    import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';
    import { TimeFrame } from '@/models/TimeFrame';
    import { ReportRow } from '@/models/ReportRow';
    import { Faction } from '@/models/Faction';
    import { RowEntity } from '@/models/RowEntity';

    @Component
    export default class ReportInputGrid extends Vue {
        @Model() private reportRows!: ReportRow[];
        @Prop() private reportType!: string;
        @Prop() private reportTimeframe!: TimeFrame;

        private factions!: Faction[];
        private rowEntities!: RowEntity[];
        private busyIndex: number = 0;
        private isBusy: boolean = false;

        @Watch('reportTimeframe', { immediate: true, deep: true })
        private onReportTimeframeChange(val: TimeFrame, oldVal: TimeFrame) {
            this.fetchData();
        }

        private async fetchData(): Promise<void> {
            let busyIndex;
            if (this.isBusy) {
                busyIndex = ++this.busyIndex;
            }

            await this.delay(100);
            this.factions = [
                { id: 1, displayName: 'A' },
                { id: 2, displayName: 'B' },
                { id: 3, displayName: 'C' },
                { id: 4, displayName: 'D' },
            ];

            await this.delay(100);
            this.rowEntities = [
                { id: 'guid-1', displayName: 'Operator 1' },
                { id: 'guid-2', displayName: 'Operator 2' },
            ];

            await this.delay(100);
            this.reportRows = [
                {
                    reportType: 'initial',
                    startDate: this.reportTimeframe.startDate,
                    endDate: this.reportTimeframe.endDate,
                    rowEntityId: 'guid-1',
                    amounts: [
                        { factionId: 1, massKg: 10 },
                        { factionId: 2, massKg: 20 },
                        { factionId: 3, massKg: 30 },
                        { factionId: 4, massKg: 40 },
                    ],
                },
            ];

            if (this.busyIndex === busyIndex) {
                this.isBusy = false;
            }
        }

        private delay<T>(milliseconds: number, value?: T): Promise<T> {
            return new Promise((resolve) => {
                setTimeout(resolve.bind(null, value), milliseconds);
            });
        }
    }
</script>

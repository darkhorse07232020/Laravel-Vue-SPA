<template>
<vs-card vs-justify="center" vs-align="center">
    <div slot="header">
        <div class="flex item_center">
            <div class="vx-col sm:w-1/2 w-full">
                <span class="headText"><pre>  Drawings</pre></span>
            </div>
            <div class="vx-col sm:w-1/2 w-full">
                <span class="headText"><pre> Door Options</pre></span>
            </div>
        </div>
    </div>

    <div style="font-size:1em">
        <div class="flex px-6 mb-6 item_center">
            <div class="vx-col sm:w-1/2 w-full px-4">
                <img :src="`/images/doors/${setDoor.Name}/Door ${setDoor.Name} Thumbnail ${drawerData.door_code}.png`" alt="No-Image" @error="imageLoadError" @click="showDrawerDialog(`/images/doors/${setDoor.Name}/Door ${setDoor.Name} ${drawerData.door_code}`)" />
            </div>
            <div class="vx-col sm:w-1/2 w-full px-4">
                <!-- <img :src="`/images/inside/${drawerData.inside_code.Code}.png`" alt="No-Image" @error="imageLoadError" @click="showOptionDialog" /> -->
            </div>
        </div>
        <div class="flex px-6 mb-6 item_center">
            <div class="vx-col sm:w-1/2 w-full px-4">
                <span>Door</span>
            </div>
            <div class="vx-col sm:w-1/2 w-full px-4">
                <span>Inside Profile</span>
            </div>
        </div>

        <div class="flex px-6 mb-6 item_center">
            <div class="vx-col sm:w-1/2 w-full px-4">
                <img :src="`/images/drawers/${setSDrawer.Name}/Drw ${setSDrawer.Name} Thumbnail ${drawerData.door_code}.png`" alt="No-Image" @error="imageLoadError" @click="showDrawerDialog(`/images/drawers/${setSDrawer.Name}/Drw ${setSDrawer.Name} ${drawerData.door_code}`)" />
            </div>
            <div class="vx-col sm:w-1/2 w-full px-4">
                <!-- <img :src="`/images/centerpanel/${drawerData.centerpanel_code.Code}.png`" alt="No-Image" @error="imageLoadError" @click="showOptionDialog" /> -->
            </div>
        </div>
        <div class="flex px-6 mb-6 item_center">
            <div class="vx-col sm:w-1/2 w-full px-4">
                <span>Drawer</span>
            </div>
            <div class="vx-col sm:w-1/2 w-full px-4">
                <span>Center Panel</span>
            </div>
        </div>

        <div class="flex px-6 mb-6 item_center">
            <div class="vx-col sm:w-1/2 w-full px-4">
                <img :src="`/images/largedrawers/${setLDrawer.Name}/LgDrw ${setLDrawer.Name} Thumbnail ${drawerData.door_code}.png`" alt="No-Image" @error="imageLoadError" @click="showDrawerDialog(`/images/largedrawers/${setLDrawer.Name}/LgDrw ${setLDrawer.Name} ${drawerData.door_code}`)" />
            </div>
            <div class="vx-col sm:w-1/2 w-full px-4">
                <!-- <img :src="`/images/outside/${drawerData.outside_code.Code}.png`" alt="No-Image" @error="imageLoadError" @click="showOptionDialog" /> -->
            </div>
        </div>
        <div class="flex px-6 mb-6 item_center">
            <div class="vx-col sm:w-1/2 w-full px-4">
                <span>LG Drawer</span>
            </div>
            <div class="vx-col sm:w-1/2 w-full px-4">
                <span>Outside Profile</span>
            </div>
        </div>

        <div class="flex px-6 mb-6 item_center">
            <div class="vx-col sm:w-1/2 w-full px-4">
                <!-- <img :src="`/images/hardware/${drawerData.hardware_code.Code}.png`" alt="No-Image" @error="imageLoadError" @click="showOptionDialog" /> -->
            </div> 
            <div class="vx-col sm:w-1/2 w-full px-4">
                <!-- <img :src="`/images/stilerail/${drawerData.stilerail_code.Code}.png`" alt="No-Image" @error="imageLoadError" @click="showOptionDialog" /> -->
            </div>
        </div>
        <div class="flex px-6 mb-6 item_center">
            <div class="vx-col sm:w-1/2 w-full px-4">
                <span>Hardware</span>
            </div>
            <div class="vx-col sm:w-1/2 w-full px-4">
                <span>Stile/Rail</span>
            </div>
        </div>
    </div>
</vs-card>
</template>
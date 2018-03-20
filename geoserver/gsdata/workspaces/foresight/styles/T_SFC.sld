<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>T_SFC</Name>
    <UserStyle>
      <Name>T_SFC</Name>
      <Title>Temperature Color style</Title>
      <Abstract>Color bins</Abstract>
      <FeatureTypeStyle>
        <Rule>
          <RasterSymbolizer>
            <Opacity>1.0</Opacity>
            <ColorMap type="intervals">
              
              <ColorMapEntry color="#D6F4F7" quantity="-3" label=" &lt; — -3 °C" />
              <ColorMapEntry color="#AEEAF0" quantity="0" label=" -3 — 0 °C" />
              <ColorMapEntry color="#85E9E8" quantity="3" label=" 0 — 3 °C" />
              <ColorMapEntry color="#5CD4E0" quantity="6" label=" 3 — 6 °C" />
              <ColorMapEntry color="#8ABBBF" quantity="9" label=" 6 — 9 °C" />
              <ColorMapEntry color="#68AEAF" quantity="12" label=" 9 — 12 °C" />
              <ColorMapEntry color="#4C9BA3" quantity="15" label=" 12 — 15 °C" />
              <ColorMapEntry color="#6B9E56" quantity="18" label=" 15 — 18 °C" />
              <ColorMapEntry color="#85AF70" quantity="21" label=" 18 — 21 °C" />
              <ColorMapEntry color="#B8D1A4" quantity="24" label=" 21 — 24 °C" />
              <ColorMapEntry color="#D1E2BE" quantity="27" label=" 24 — 27 °C" />
              <ColorMapEntry color="#DCEDC8" quantity="30" label=" 27 — 30 °C" />
              <ColorMapEntry color="#F9F18A" quantity="33" label=" 30 — 33 °C" />
              <ColorMapEntry color="#FED954" quantity="36" label=" 33 — 36 °C" />
              <ColorMapEntry color="#FDBB21" quantity="39" label=" 36 — 39 °C" />
              <ColorMapEntry color="#F47F20" quantity="42" label=" 39 — 42 °C" />
              <ColorMapEntry color="#FF5527" quantity="45" label=" 42 — 45 °C" />
              <ColorMapEntry color="#C92026" quantity="50" label=" > — 45 °C" />
              

            </ColorMap>
          </RasterSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
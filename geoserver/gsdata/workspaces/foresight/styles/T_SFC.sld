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
              
              <ColorMapEntry color="#D6F4F7" quantity="-3" label=" &lt;-3" />
              <ColorMapEntry color="#AEEAF0" quantity="0" label=" -3 — &lt;0" />
              <ColorMapEntry color="#85E9E8" quantity="3" label=" 0 — &lt;3" />
              <ColorMapEntry color="#5CD4E0" quantity="6" label=" 3 — &lt;6" />
              <ColorMapEntry color="#8ABBBF" quantity="9" label=" 6 — &lt;9" />
              <ColorMapEntry color="#68AEAF" quantity="12" label=" 9 — &lt;12" />
              <ColorMapEntry color="#4C9BA3" quantity="15" label=" 12 — &lt;15" />
              <ColorMapEntry color="#6B9E56" quantity="18" label=" 15 — &lt;18" />
              <ColorMapEntry color="#85AF70" quantity="21" label=" 18 — &lt;21" />
              <ColorMapEntry color="#B8D1A4" quantity="24" label=" 21 — &lt;24" />
              <ColorMapEntry color="#D1E2BE" quantity="27" label=" 24 — &lt;27" />
              <ColorMapEntry color="#DCEDC8" quantity="30" label=" 27 — &lt;30" />
              <ColorMapEntry color="#F9F18A" quantity="33" label=" 30 — &lt;33" />
              <ColorMapEntry color="#FED954" quantity="36" label=" 33 — &lt;36" />
              <ColorMapEntry color="#FDBB21" quantity="39" label=" 36 — &lt;39" />
              <ColorMapEntry color="#F47F20" quantity="42" label=" 39 — &lt;42" />
              <ColorMapEntry color="#FF5527" quantity="45" label=" 42 — &lt;45" />
              <ColorMapEntry color="#C92026" quantity="50" label=" &lt;45" />
              

            </ColorMap>
          </RasterSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>